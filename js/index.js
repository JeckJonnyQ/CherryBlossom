import initSwiper from "./swiper.js";
import wow from "./wow.js";

// Импортирует наш АПП из базы данных
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

// Your web app's Firebase configuration (настройки нашей ДБ)
const firebaseConfig = {
    apiKey: "AIzaSyAtbARujH07wceEwdLuQqovNYSXuT317v0",
    authDomain: "cherryblossom-693d3.firebaseapp.com",
    databaseURL: "https://cherryblossom-693d3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cherryblossom-693d3",
    storageBucket: "cherryblossom-693d3.appspot.com",
    messagingSenderId: "203475880541",
    appId: "1:203475880541:web:8cbd33eb70885c0a399bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Импортируем базу данных с FireBase
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
const database = getDatabase(app);

// Импортируем методы Авторизации
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const auth = getAuth();


// Список компонентов (from components.js)
const components = {
    header: Header,

    // Модалка Регистрации Авторизации
    modalLogIn: ModalLogIn,

    main: Main,
    mainAdditional: MainAdditional,
    topRated: TopRated,

    choice: Choice,
    subscribe: Subscribe,
    questions: Questions,
    follow: Follow,
    blogs: Blogs,
    information: Information,
    footer: Footer,

    collections: Collections,
    about: About,
    cart: CartPage,
    cartItem: CartPageItem,
};

// Список поддерживаемых роутов (from pages.js)
const routes = {
    main: HomePage,
    collections: CollectionPage,
    about: AboutPage,
    accountcart: AccountCartPage,
    default: HomePage,
    // error: ErrorPage,
}

const mySPA = (function () {

    // CONTROLLER ==================================================================
    function GlobalController() {
        let myGlobalContainer = null;
        let myGlobalModel = null;
        let userName = null;
        let email = null;
        let password = null;

        async function updateState() {
            const hashPageName = location.hash.slice(1).toLowerCase();

            myGlobalModel.manageUser();

            if (hashPageName.startsWith('scroll-')) {
                // Ссылка начинается с 'scroll-', скроллим страницу до раздела
                scrollToSection(hashPageName);
                // event.preventDefault();
            } else {
                // Рендерим новую страницу в рамках вашего SPA
                myGlobalModel.updateState(hashPageName);
            }

            // Вызывем метод динамического добавления карточек товара из БД
            await myGlobalModel.loadTopRatedFromBD();

            if (hashPageName == 'accountcart') {
                await myGlobalModel.renderShoppingCart();
            }

            // Открытие модального окна ЛОГИН
            const buttonOpenModal = document.getElementById('button-registration');
            buttonOpenModal.addEventListener('click', openModalLogin);

            // Закрытие модального окна ЛОГИН
            const buttonCloseModal = document.getElementById('modal-close');
            buttonCloseModal && buttonCloseModal.addEventListener('click', closeModalLogin);

            // Переход на модальное окно РЕГИСТРАЦИИ
            const buttonSignUpNow = document.getElementById('modal-sign-up-now');
            buttonSignUpNow && buttonSignUpNow.addEventListener('click', transitionToSignUp);

            // Переход на модальное окно ЛОГИНА
            const buttonReturnToLogin = document.getElementById('modal-return-log');
            buttonReturnToLogin && buttonReturnToLogin.addEventListener('click', transitionToLogin);

            // Запись в БД данных пользователя по кнопке SIGN UP
            const buttonSignUP = document.getElementById('modal-sign-up');
            buttonSignUP && buttonSignUP.addEventListener('click', registerUser);

            // Вход в кабинет из БД данных пользователя по кнопке LOG IN
            const buttonLogIn = document.getElementById('modal-login');
            buttonLogIn && buttonLogIn.addEventListener('click', enterAccountUser);

            // Инпуты для регистрации данных в БД
            userName = document.querySelector('#input-username');
            email = document.querySelector('#input-email');
            password = document.querySelector('#input-password');

            // Кнопка выхода из АККАУНТА
            const buttonLogOut = document.getElementById('button-leave-account');
            buttonLogOut.addEventListener('click', logOutUser);

            // Кнопка открытия САЙД БАРА
            let buttonMenu = document.getElementById('button-menu');
            buttonMenu.addEventListener('click', openSidebarCon);

            // Кнопка закрытия САЙД БАРА
            let buttonCloseSidebar = document.getElementById('button-close-sidebar');
            buttonCloseSidebar.addEventListener('click', closeSidebarCon);

            // Обработка клика по экрану вне сайдбара для его закрытия
            document.addEventListener('click', closeSidebarCon);

            // Предотвращаем всплытие события при клике внутри сайдбара
            let buttonMenuSidebar = document.getElementById('button-menu-sidebar');
            buttonMenuSidebar.addEventListener('click', function (event) {
                event.stopPropagation();
            });

            // Вызываем функцию параллакса что бы при переходах по хешам анимация отрабатывала
            parallaxEffect();

            // Вешаем обработчик событий на обертку Аккордеона(делегирование)
            const accordionWrapper = document.getElementById('accordion-wrapper');
            accordionWrapper && accordionWrapper.addEventListener('click', openAccController);

            // Добавление Товара в корзину
            const buttonAddToCart = document.querySelectorAll('.add-cart');
            buttonAddToCart.forEach(button => button.onclick = addProductToCart);
        }


        function scrollToSection(sectionId) {

            const scrollTarget = document.getElementById(sectionId);

            if (scrollTarget) {
                const topOffset = document.querySelector('header').offsetHeight;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    left: 0,
                    behavior: 'smooth',
                });
            };
        };


        // Кнопка открытия модального окна регистрации
        function openModalLogin() {
            myGlobalModel.openModalLogin();
        }
        // Кнопка закрытия модального окна регистрации
        function closeModalLogin() {
            myGlobalModel.closeModalLogin();
        }
        // Переход к модальному окну РЕГИСТРАЦИИ
        function transitionToSignUp() {
            myGlobalModel.transitionToSignUp();
        }
        // Переход к модальному окну ЛОГИНА
        function transitionToLogin() {
            myGlobalModel.transitionToLogin();
        }
        // Регистрация пользователя в БД
        function registerUser() {
            myGlobalModel.registerUser(userName.value, email.value, password.value);
        }
        // Авторизация пользователя в Аккаунте
        function enterAccountUser() {
            myGlobalModel.enterAccountUser(email.value, password.value);
        }
        // Выход из аккаунта пользователя
        function logOutUser() {
            myGlobalModel.logOutUser();
        }


        // Открытие СайдБара
        function openSidebarCon(event) {
            event.stopPropagation();
            myGlobalModel.openSidebarMod();
        }
        // Закрытие СайдБара
        function closeSidebarCon() {
            myGlobalModel.closeSidebarMod();
        };


        // PARALLAX эффект
        function parallaxEffect() {
            myGlobalModel.parallaxEffect();
        }
        // Метод открытия Аккордеона (Контроллер => Модель)
        function openAccController(event) {
            const target = event.target.closest(".accordion");
            if (target) {
                myGlobalModel.openAccModel(target);
            }
        }

        // Добавление товара по клику в корзину
        function addProductToCart(event) {
            const id = event.currentTarget.id;
            const flowerId = id.split('_')[0];
            myGlobalModel.addProductToCart(flowerId);
        }

        return {
            init: function (container, model) {
                myGlobalContainer = container;
                myGlobalModel = model;

                // Вешаем слушателей на событие hashchange и кликам по пунктам меню
                window.addEventListener("hashchange", updateState);

                updateState();                                                     //первая отрисовка
                parallaxEffect();
            }
        }
    }

    // MODEL
    function GlobalModel() {
        let myGlobalView = null;

        this.init = function (view) {
            myGlobalView = view;
        }

        this.updateState = function (hashPageName) {
            myGlobalView.renderContent(hashPageName);              // main
        }

        // Открытие модального окна ЛОГИН
        this.openModalLogin = function () {
            myGlobalView.showModalLogin();
        }
        // Закрытие модального окна ЛОГИН
        this.closeModalLogin = function () {
            myGlobalView.closeModalLogin();
        }

        // Переход к модальному окну РЕГИСТРАЦИИ
        this.transitionToSignUp = function () {
            myGlobalView.transitionToSignUp();
        }
        // Переход к модальному окну ЛОГИН
        this.transitionToLogin = function () {
            myGlobalView.transitionToLogin();
        }

        // Метод РЕГИСТРАЦИИ пользователя
        this.registerUser = function (username, email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    set(ref(database, "UsersList/" + user.uid),
                        {
                            username: username,
                            email: email,
                        })
                    myGlobalView.successfulSignUp();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    myGlobalView.catchError(errorCode);
                });
        }

        // Метод АВТОРИЗАЦИИ пользователя
        this.enterAccountUser = function (email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    myGlobalView.setUsername(userCredential.user.email);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    myGlobalView.catchError(errorCode);
                });
        }

        // Метод получения из БД информации по текущему пользователю
        this.manageUser = function () {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    get(child(ref(database), "UsersList/" + uid))
                        .then(snapshot => {
                            const user = snapshot.val();
                            myGlobalView.renderInfo(user);
                            myGlobalView.setUsername(user.username);
                        })
                }
            });
        }
        // Выход пользователя из личного кабинета
        this.logOutUser = function () {
            signOut(auth).then(() => {
                myGlobalView.logOutUser();
            }).catch((error) => {
                myGlobalView.logOutUserError(error);
            });
        }


        // Открытие СайдБара
        this.openSidebarMod = function () {
            myGlobalView.openSidebarView();
        }
        // Закрытие СайдБара
        this.closeSidebarMod = function () {
            myGlobalView.closeSidebarView();
        }


        // Метод открытия Аккордеона (Модель => Вью)
        this.openAccModel = function (target) {
            myGlobalView.openAcc(target);
        }
        // PARALLAX
        this.parallaxEffect = function () {
            myGlobalView.parallaxEffect();
        }

        // Динамическая подгрузка карточек из БД
        this.loadTopRatedFromBD = async function () {
            const snapshot = await get(child(ref(database), 'TopRated'));
            if (snapshot.exists()) {
                const flowers = snapshot.val();
                myGlobalView.renderTopRated(flowers);
            }
        }

        // Добавление Продукта в Корзину
        this.addProductToCart = function (flowerId) {
            const uid = auth.currentUser.uid;
            get(child(ref(database), "UsersList/" + uid))
                .then(snapshot => {
                    const user = snapshot.val();
                    if (!user.cart) {
                        user.cart = [];
                    }
                    const flower = user.cart.find(item => item.flowerId === flowerId); // Проверяем в Сart если такой Цветок 
                    if (flower) {
                        flower.quantity++;
                    } else {
                        user.cart.push({ flowerId, quantity: 1 });                     // добавялем в количестве одного
                    }
                    set(ref(database, "UsersList/" + uid), user)
                })
        }

        // Метод отрисовки товара в корзине
        this.renderShoppingCart = function () {
            const uid = auth.currentUser.uid;
            get(child(ref(database), "UsersList/" + uid + "/cart"))
                .then(snapshot => {
                    const cart = snapshot.val();
                    get(child(ref(database), "TopRated"))
                        .then(flowerssnapshot => {
                            const flower = flowerssnapshot.val();
                            myGlobalView.renderShoppingCart(flower, cart);
                        })
                })
        }
    }

    // VIEW
    function GlobalView() {
        let myGlobalContainer = null;
        let routesObj = routes;
        let buttonMenuSidebar = null;
        let topRatedFlowers = null;
        let shoppingCartContent = null;

        let userName = null;
        let email = null;
        let password = null;
        let errorContent = null;

        let myLogModal = null;
        let myLogModalOverlay = null;

        // Кнопки перехода между модалкам Регистрации и Авторизации
        let moveToLogin = null;
        let moveToSignUp = null;

        let successSignUp = null;
        let accountContent = null;
        let accountUsername = null;
        let modalContent = null;


        this.init = function (container, routes) {
            myGlobalContainer = container;
            routesObj = routes;
        }

        this.renderContent = function (hashPageName) {                                  // main
            let routeName = "default";

            if (hashPageName.length > 0) {
                routeName = hashPageName in routes ? hashPageName : "error";
            }

            window.document.title = routesObj[routeName].title;

            myGlobalContainer.innerHTML = routesObj[routeName].render(`${routeName}-page`);
            buttonMenuSidebar = document.getElementById('button-menu-sidebar');

            // Выбираем див в который будут рендерится карточки товаров (компонента Card)
            topRatedFlowers = document.querySelector('.top-rated-grid');

            // Указываем див в котором будет рендерится модалка и оверлей
            myLogModal = document.getElementById('modal');
            myLogModalOverlay = document.getElementById('modal-overlay');

            // Указываем классы элементов необходимых для рендера
            moveToLogin = document.querySelectorAll('.move-to-login');
            moveToSignUp = document.querySelectorAll('.move-to-signup');

            initSwiper('.swiper');

            userName = document.querySelector('#input-username');
            email = document.querySelector('#input-email');
            password = document.querySelector('#input-password');
            errorContent = document.getElementById('error-content');

            successSignUp = document.getElementById('succes-sign-up');

            accountContent = document.getElementById('account-content');
            accountUsername = document.getElementById('account-username');

            modalContent = document.getElementById('modal-content');

            // Выбираем див в который будут рендерится товары добавленные в корзину
            shoppingCartContent = document.getElementById('shopping-cart-content');
        }

        // Открытие модального окна ЛОГИН
        this.showModalLogin = function () {
            myLogModal.classList.remove('modal_closed');
            myLogModalOverlay.classList.remove('modal_closed');
        }
        // Закрытие модального окна ЛОГИН
        this.closeModalLogin = function () {
            userName.value = '';
            email.value = '';
            password.value = '';
            errorContent.innerHTML = '';
            myLogModal.classList.add('modal_closed');
            myLogModalOverlay.classList.add('modal_closed');
        }
        
        // Кнопка перехода на модальное окно РЕГИСТРАЦИИ
        this.transitionToSignUp = function () {
            email.value = '';
            password.value = '';
            errorContent.innerHTML = '';
            moveToLogin.forEach(elements => {
                elements.classList.add('hide');
            })
            moveToSignUp.forEach(elements => {
                elements.classList.remove('hide');
            })
        }
        // Кнопка перехода на модальное окно ЛОГИН
        this.transitionToLogin = function () {
            successSignUp.classList.add('hide');
            modalContent.classList.remove('hide');
            userName.value = '';
            email.value = '';
            password.value = '';
            errorContent.innerHTML = '';

            moveToSignUp.forEach(elements => {
                elements.classList.add('hide');
            })
            moveToLogin.forEach(elements => {
                elements.classList.remove('hide');
            })
        }

        this.successfulSignUp = function () {
            errorContent.innerHTML = '';
            successSignUp.classList.remove('hide');
            modalContent.classList.add('hide');
        }

        this.setUsername = function () {
            errorContent.innerHTML = '';
            email.value = '';
            password.value = '';
            myLogModal.classList.add('modal_closed');
            myLogModalOverlay.classList.add('modal_closed');
            accountContent.classList.remove('hide');
        }

        this.renderInfo = function (user) {
            accountUsername.innerHTML = user.username;
        }

        // Кнопка выхода из аккаунта
        this.logOutUser = function () {
            accountUsername.innerHTML = '';
            // shoppingCartContent.innerHTML = '';
            accountContent.classList.add('hide');
            window.location.hash = '#main';
        }

        this.logOutUserError = function (error) {
            alert(error);
        }

        this.catchError = function (errorCode) {
            if (errorCode === 'auth/invalid-email' || errorCode === 'auth/weak-password') {
                errorContent.innerHTML = 'Неверный логин или пароль. Проверьте правильность ввода. Пароль должен быть не менее 6 символов.';
            } else if (errorCode === 'auth/missing-password' || errorCode === 'auth/missing-email') {
                errorContent.innerHTML = 'Отсутствует логин или пароль.';
            } else if (errorCode === 'auth/email-already-in-use') {
                errorContent.innerHTML = 'Такой пользователь уже существует.';
            } else if (errorCode === 'auth/user-not-found') {
                errorContent.innerHTML = 'Пользователь не найден.';
            } else if (errorCode === 'auth/wrong-password') {
                errorContent.innerHTML = 'Неверный пароль. Попробуйте еще раз.';
            }
        }


        // Открытие СайдБара
        this.openSidebarView = function () {
            buttonMenuSidebar.classList.add('active');
        }
        // Закрытие СайдБара
        this.closeSidebarView = function () {
            buttonMenuSidebar.classList.remove('active');
        }

        // PARALLAX
        this.parallaxEffect = function (main, mainBgLeft, mainBgRight) {

            main = document.querySelector('.main');
            mainBgLeft = document.querySelector('.main-bg-left');
            mainBgRight = document.querySelector('.main-bg-right');


            if (main && mainBgLeft && mainBgRight) {

                const containerWidth = main.offsetWidth;
                const containerHeight = main.offsetHeight;

                //коэффициенты
                const right = 30;
                const left = 20;

                //Скорость анимации
                const speed = 0.05;

                //Объявление переменных
                let posX = 0;
                let posY = 0;
                let coordXPercent = 0;
                let coordYPercent = 0;

                const parallaxFunction = () => {
                    const distX = coordXPercent - posX;
                    const distY = coordYPercent - posY;

                    posX = posX + (distX * speed);
                    posY = posY + (distY * speed);

                    mainBgLeft.style.cssText = `transform: translate(${posX / right}%, ${posY / right}%)`;
                    mainBgRight.style.cssText = `transform: translate(${posX / left}%, ${posY / left}%)`;

                    requestAnimationFrame(parallaxFunction);
                }

                main.addEventListener("mousemove", function (el) {
                    // Ноль на середине
                    const coordX = el.pageX - containerWidth / 2;
                    const coordY = el.pageY - containerHeight / 2;

                    //Получаем проценты
                    coordXPercent = coordX / containerWidth * 100;
                    coordYPercent = coordY / containerHeight * 100;
                });

                parallaxFunction();
            }
        }

        // Метод открытия Аккордеона (Вью)
        this.openAcc = function (target) {
            const panel = target.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            target.classList.toggle("active");
        }

        // Добавляем динамиески из БД карточки товаров
        this.renderTopRated = function (flowers) {
            if (topRatedFlowers && Object.keys(flowers).length > 0) {
                for (let key in flowers) {
                    const flower = flowers[key];
                    topRatedFlowers.innerHTML += Card.render(key, flower.image, flower.title, flower.price);
                }
            }
        }

        // Добавляем динамически Товар в корзину
        this.renderShoppingCart = function (flower, cart) {
            if (shoppingCartContent && Object.keys(cart).length > 0) {
                for (let key in cart) {
                    const cartItem = cart[key];
                    const flowerItem = flower[cartItem.flowerId];
                    shoppingCartContent.innerHTML += CartPageItem.render(flowerItem.image, flowerItem.title, cartItem.quantity, flowerItem.price)
                }
            }
        }
    }

    return {
        init: function ({ container, routes, components }) {
            this.renderComponents(container, components);

            const view = new GlobalView();
            const controller = new GlobalController();
            const model = new GlobalModel();

            // Связываем части модуля
            view.init(document.getElementById(container), routes);
            model.init(view);
            controller.init(document.getElementById(container), model);
        },

        renderComponents: function (container, components) {
            const root = document.getElementById(container);
            const componentsList = Object.keys(components);
            for (let item of componentsList) {
                root.innerHTML += components[item].render("component");
            }
        },
    };
}());


/*** --- init module --- ***/
document.addEventListener("DOMContentLoaded", mySPA.init({
    container: "app",
    routes: routes,
    components: components,
}));
