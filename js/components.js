const Header = {
    render: () => {
        return `
    <section class="header">
        <div class="container">
            <header>
                <div class="button-menu-registration">
                    <button class="button-menu" id="button-menu"><span></span></button>
                    <button class="button-registration" id="button-registration">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 448 512">
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" fill="#665F5F"></svg>
                    </button>
                    <img src="./images/Logo.png" alt="Лого">
                </div>

                <div class="account-block">
                    <button class="button-search"></button>
                    <div class="account-content hide" id="account-content">
                        <p class="account-username" id="account-username"></p>
                        <a class="account-cart" id="account-cart" href="#accountcart">0$</a>
                        <button class="button-leave-account" id="button-leave-account">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                                <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" fill="#665F5F">
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="button-menu-sidebar" id="button-menu-sidebar">
                    <div class="wrapper-button-close">
                        <button class="button-close-sidebar" id="button-close-sidebar">
                            <img src="./images/ButtonClosedSidebar.svg" alt="">
                        </button>
                    </div>
                <div class="sidebar">
                    <ul>
                        <li><a href="#main">Home</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#scroll-search">Search</a></li>
                        <li><a href="#">Catalog</a></li>
                        <li><a href="#scroll-contacts">Contacts</a></li>
                      </ul>
                </div>
            </header>
        </div>
    </section>
      `;
    }
};

const ModalLogIn = {
    render: () => {
        return `
        <div class="modal-overlay modal_closed" id="modal-overlay"></div>
   
        <div class="modal modal_closed" id="modal">
            <header class="modal-header">
                <h2 class="move-to-login">LogIn</h2>
                <h2 class="move-to-signup hide">sign up</h2>
                <button class="modal-close" id="modal-close"></button>
            </header>

            <main class="modal-content" id="modal-content">
                <div class="form-field">
                    <input class="input-username move-to-signup hide" id="input-username" type="text" name="username" placeholder="username">
                </div>

                <div class="form-field">
                    <input class="input-email" id="input-email" type="email" name="email" placeholder="email">
                </div>

                <div class="form-field">
                    <input class="input-password" id="input-password" type="password" name="password" placeholder="password">
                </div>
            </main>

            <div class="success-sign-up hide" id="succes-sign-up">
                <p>Sign Up completed successfully. Press return to login</p>
            </div>


            <section class="modal-footer">
                <button class="modal-login move-to-login" id="modal-login" title="LogIn">LogIn</button>
                <button class="modal-sign-up move-to-signup hide" id="modal-sign-up" title="SignUp">sign up</button>

                <div class="error-content" id="error-content"></div>

                <p class="move-to-login">no account?</p>
                <p class="move-to-signup hide">already have an account?</p>

                <button class="modal-sign-up-now move-to-login" id="modal-sign-up-now" title="SignUpNow">sign up now</button>
                <button class="modal-return-log move-to-signup hide" id="modal-return-log" title="ModalReturnLogin">Return To Login</button>
            </section>
        </div>
        `;
    }
}

const Main = {
    render: () => {
        return `
        <section class="main">
        <div class="main-bg-left">
            <img src="./images/BackGroundMainLeft.png" alt="">
        </div>
        <div class="main-bg-right">
            <img src="./images/BackGroundMainRight.png" alt="">
        </div>

        <div class="container">
            <div class="main-block-content">
                <h1>Choose flowers<br>for any occasion</h1>
                <p>Our goal is to provide the highest quality<br>and fresh flower delivery in <strong>Los
                        Angeles.</strong></p>
                <button class="button-view">View now</button>
            </div>
        </div>
    </section>
        `;
    }
}

const MainAdditional = {
    render: () => {
        return `
        <section class="main-additional">
            <div class="container">
                <div class="main-wrapper">
                    <div class="main-wrapper-first">
                        <p>Need flowers delivered today?</p>
                        <p class="main-wrapper-content">Call or chat us</p>
                    </div>
                    <div class="main-wrapper-second">
                        <p>Free delivery within 4 miles</p>
                        <p class="main-wrapper-content">No minimum order</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

const TopRated = {
    render: () => {
        return `
        <section class="top-rated">
        <div class="container">
            <h2>Top Rated</h2>
            <div class="top-rated-wrapper">
                <div class="top-rated-grid">
                
                </div>
            </div>
            <button class="button-show">Show more</button>
        </div>
    </section>
        `;
    }
}

const Card = {
    render: (id, image, title, price) => {
        return `
        <div class="top-rated-grid-item wow animate__zoomIn">
        <img src="${image}">
        <div class="item-content">
            <div class="item-price">
                <h5>${title}</h5>
                <p>$${price}</p>
            </div>
            <button class="add-cart" id="${id}_buttonCart">Add to cart</button>
        </div>
        </div>
        `
    }
}

const Choice = {
    render: () => {
        return `
        <section class="choice">
        <div class="container">
            <h2>Why choose us?</h2>
            <div class="choice-wrapper">

                <div class="choice-wrapper-block">
                    <h3 class="choice">Extensive сhoice</h3>
                    <p>We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types
                        of flowers, including roses, tulips, lilies, and more!</p>
                </div>

                <div class="choice-wrapper-block">
                    <h3 class="fast">As fast as possible</h3>
                    <p>When it comes to delivering flowers as fast as possible, we don't mess around. We also provide
                        next-day delivery from our store to your door.</p>
                </div>

                <div class="choice-wrapper-block">
                    <h3 class="order">Online ordering</h3>
                    <p>FAll you need to do is select the type and quantity of what you want online - we'll take care of
                        the rest! Our team is online 24/7 with clients.</p>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

const Subscribe = {
    render: () => {
        return `
        <section class="subscribe" id="scroll-search">
        <div class="container">
            <h3>Subscribe to our emails</h3>
            <p>Be the first to know about new collections and exclusive offers.</p>
            <input type="email" placeholder="E-mail">
        </div>
        </section>
        `;
    }
}

const Questions = {
    render: () => {
        return `
        <section class="questions">
        <div class="container">
            <h3>Frequently Asking Questions</h3>

            <div class="accordion-wrapper" id="accordion-wrapper">

                <div class="accordion">
                    <p>Can I order same day flower delivery?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Yes, you can place your order until 12pm to get it the
                        same day, but if it’s later than 12pm, you can just call us and we will try to rearrange
                        our schedule and deliver it on the same day.</p>
                </div>

                <div class="accordion">
                    <p>Do you deliver on Sundays?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Yes, we do. We deliver all Sunday long, you can order bouquets online for delivery or you can
                        just call us and we will deliver your flowers to you.</p>
                </div>


                <div class="accordion">
                    <p>How much does flower delivery service cost?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Yes We deliver up to 4 miles for free, 4-8 miles – $15, 8-20 miles - $20, 20-30 miles - $30 and
                        30-50 miles - $50.</p>
                </div>

                <div class="accordion">
                    <p>How long does it take to deliver flowers</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Usually we deliver during the day, but when you order online, you could pick time slots – for
                        example – from 8am to 12pm and we will deliver at the given time. Also, if you need bouquets
                        delivered at
                        an exact time, just call us at +214 772 56 74 and we will try to do our best to deliver them to
                        you at
                        the time of your choosing.</p>
                </div>

                <div class="accordion">
                    <p>Can I pick up flowers from the shop?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Yes, sure! You are always welcome at our shop but if you live near our location remember, you can
                        order
                        flowers with free shipping.</p>
                </div>

                <div class="accordion">
                    <p>Can I order flower delivery for tomorrow?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Yes, you can place your order online until midnight or call our shop until 6pm to place your
                        order and
                        get your delivery on the next day.</p>
                </div>

                <div class="accordion">
                    <p>Where do you deliver flowers?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>We deliver to West Hollywood, North Hollywood, Beverly Hills, Santa Monica, Pasadena, Encino, Bel
                        Air, Brentwood, Sherman Oaks, Manhattan Beach, El Segundo, Marina del Rey, Culver City,
                        Koreatown,
                        Downtown LA, Palms, Van Nuys, Glendale, Studio City, Venice, Pacific Palisades and Malibu.</p>
                </div>

                <div class="accordion">
                    <p>Can I create my own bouquet?</p>
                    <img src="./images/Vector.svg" alt="">
                </div>
                <div class="panel">
                    <p>Yes, we have so many fresh arrangements every day, you are more than welcome to come, pick the
                        flowers you like and we will make a bouquet or flower arrangement from them for you. You can
                        always
                        visit our flower workshop and enjoy the feeling atmosphere of making a flower arrangement with
                        florists
                        step by step.
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

const Follow = {
    render: () => {
        return `
        <section class="follow">
        <div class="container">
            <h3>Follow Us on instagram</h3>
            <a href="@CHERRYBLOSSOM.LA">@CHERRYBLOSSOM.LA</a>
            <div class="follow-wrapper-grid">
                <div>
                    <img src="./images/FollowOne.png" alt="">
                </div>
                <div>
                    <img src="./images/FollowTwo.png" alt="">
                </div>
                <div>
                    <img src="./images/FollowThree.png" alt="">
                </div>
                <div>
                    <img src="./images/FollowFour.png" alt="">
                </div>
                <div>
                    <img src="./images/FollowFive.png" alt="">
                </div>
                <div>
                    <img src="./images/FollowSix.png" alt="">
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

const Blogs = {
    render: () => {
        return `
        <section class="blogs">
        <div class="container">
            <h4>Our blogs</h4>

            <div class="blogs-wrapper">

                <!-- Главный контейнер Свайпера-->
                <div class="swiper">
                    <!-- Дополнительная Обертка Свайпера -->
                    <div class="swiper-wrapper">
                        <!-- Слайды -->
                        <div class="swiper-slide">
                            <div class="slide-content">
                                <img src="./images/SlideOne.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                            <div class="slide-content">
                                <img src="./images/SlideOne.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                            <div class="slide-content">
                                <img src="./images/SlideOne.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="slide-content">
                                <img src="./images/SlideTwo.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                            <div class="slide-content">
                                <img src="./images/SlideTwo.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                            <div class="slide-content">
                                <img src="./images/SlideTwo.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="slide-content">
                                <img src="./images/SlideThree.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                            <div class="slide-content">
                                <img src="./images/SlideThree.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                            <div class="slide-content">
                                <img src="./images/SlideThree.png" alt="">
                                <h5>In amet, mollis </h5>
                                <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget
                                    mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero,
                                    libero, amet tortor, velit ex. </p>
                            </div>
                        </div>
                    </div>

                    <!-- Див обертка для кнопок (сделал z-индекс т.к. ушел под слайды) -->
                    <div class="swiper-button">
                        <div class="button-prev"></div>
                        <div class="button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

const Information = {
    render: () => {
        return `
        <section class="information" id="scroll-contacts">
        <div class="container">
            <div class="information-wrapper">
                <div class="information-content">
                    <img src="./images/InfoItem.png" alt="Иконка Поинта">
                    <h4>Сherry Blossom Address</h4>
                    <p>6201 Hollywood blvd </p>
                    <p>Los Angeles, California 90028</p>
                    <br>
                    <p>Monday - Friday 9:00 am - 8:00 pm</p>
                    <p>Saturday 10:00 am - 5:00 pm</p>
                    <p>Sunday 10:00 am - 5:00 pm</p>
                </div>
            </div>
        </div>
    </section>
    `;
    }
}

const Footer = {
    render: () => {
        return `
        <footer>
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-wrapper-info">
                    <ul class="menu-notice">
                        <h4>Menu</h4>
                        <li><a href="">Home</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#search">Search</a></li>
                        <li><a href="">Catalog</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>

                    <ul class="info">
                        <img src="./images/LogoFooter.png" alt="ЛогоФутер">
                        <li>6201 Hollywood blvd </li>
                        <li>Los Angeles, California 90028</li>
                        <br>
                        <li>Monday - Friday 9:00 am - 8:00 pm</li>
                        <li>Saturday 10:00 am - 5:00 pm</li>
                        <li>Sunday 10:00 am - 5:00 pm</li>
                        <br>
                        <li><a href="tel:+214 772 56 74">+214 772 56 74</a></li>
                        <li><a href="#">cherryblossom@gmail.com</a></li>
                    </ul>

                    <ul class="menu-notice">
                        <h4>Legal Notice</h4>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Shipping police</a></li>
                        <li><a href="#">Billing and payment</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-wrapper-social">
                <div>
                    <a href="#" target="_blank">
                        <img src="./images/pinterest.svg" alt="Пинтерест">
                    </a>
                    <a href="#" target="_blank">
                        <img src="./images/instagram.svg" alt="Инста">
                    </a>
                    <a href="#" target="_blank">
                        <img src="./images/facebook.svg" alt="Фейсбук">
                    </a>
                </div>

                <div>
                    <a href="#" target="_blank">
                        <img src="images/visa.png" alt="Виза">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/visasecure.png" alt="ВизаСекьюр">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/alfa.png" alt="Альфа">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/mastercardid.png" alt="Мастеркардайди">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/mastercard.png" alt="Мастеркард">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/belcard.png" alt="Белкарт">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/belcardparol.png" alt="БелкартПароль">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/applepay.png" alt="Эплпей">
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/samsungpay.png" alt="Самсунгпей">
                    </a>
                </div>
                <p>© 2022, Los Angeles Florist - Cherry Blossom</p>
            </div>
        </div>
        `;
    }
}


// Страница Collections ===============================
const Collections = {
    render: () => {
        return `
        <section class="collections" id="scroll-collections">
            <div class="container">

            <div class="collections-links">
                <a href="#main">Home</a> /
                <a href="#collections">Collections</a>
            </div>
    
            <h2>Our Collections</h2>
            <div class="collections-wrapper-grid">
                <div class="collections-block birthday">
                    <div class="collections-block-background"></div>
                    <p>Birthday</p>
                </div>
                <div class="collections-block wedding">
                    <div class="collections-block-background"></div>
                    <p>Wedding</p>
                </div>
                <div class="collections-block anniversary">
                    <div class="collections-block-background"></div>
                    <p>Anniversary</p>
                </div>
                <div class="collections-block new-baby">
                    <div class="collections-block-background"></div>
                    <p>New baby</p>
                </div>
                <div class="collections-block luxury">
                    <div class="collections-block-background"></div>
                    <p>Luxury</p>
                </div>
                <div class="collections-block graduation">
                    <div class="collections-block-background"></div>
                    <p>Graduation</p>
                </div>
                <div class="collections-block new-year">
                    <div class="collections-block-background"></div>
                    <p>New Year</p>
                </div>
                <div class="collections-block valentines-day">
                    <div class="collections-block-background"></div>
                    <p>Valentines Day</p>
                </div>
                <div class="collections-block sympathy">
                    <div class="collections-block-background"></div>
                    <p>Sympathy</p>
                </div>
                <div class="collections-block love-and-romance">
                    <div class="collections-block-background"></div>
                    <p>Love and Romance</p>
                </div>
                <div class="collections-block thank-you">
                    <div class="collections-block-background"></div>
                    <p>Thank you</p>
                </div>
                <div class="collections-block toys">
                    <div class="collections-block-background"></div>
                    <p>Toys</p>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

// Страница About Us ==================================
const About = {
    render: () => {
        return `
        <section class="about-us" >
            <div class="container">
                <div class="about-us-block">
                    <div class="about-us-links">
                        <a href="#main">Home</a> /
                        <a href="#about">About Us</a>
                    </div>
                    <h3>About us</h3>
                </div>
            </div>

            <div class="background-img">
                <img src="./images/BackGroundAboutUs.png" alt="">
            </div>

            <div class="container">
                <div class="about-us-content">
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                        the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
                        weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
                        perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every
                        pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business
                        it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater
                        pleasures, or else he endures pains to avoid worse pains.</p>
                </div>
            </div>
        </section>
    `;
    }
}

// Страница Корзины ===================================
const CartPage = {
    render: () => {
        return `
        <section class="my-shopping" id="my-shopping">
            <div class="container">
                <div class="my-shopping-cart-block">
                    <div class="my-shopping-cart-links">
                        <a href="#main">Home</a> /
                        <a href="#accountcart">Cart</a>
                    </div>

                    <h3>My Shopping Cart</h3>

                    <div class="cart-nav">
                        <p>Product</p>
                        <div class="cart-nav-item">
                            <p>Quantity</p>
                            <p>Total</p>
                        </div>
                    </div>
                    <div class="shopping-cart-content" id="shopping-cart-content">
                    
                    </div>
                </div>
            </div>
        </section>
        `
    }
}
// Динамическиое Добавление товара в корзину
const CartPageItem = {
    render: (image, title, quantity, price) => {
        return `
        <div class="shopping-cart-block">
            <div class="cart-product">
                <img src="${image}">
                <h4>${title}</h4>
            </div>
            <div class="cart-quantity-total">
                <div class="cart-quantity">
                    <button class="cart-quantuty-reduce">-</button>
                    <p>${quantity}</p>
                    <button class="cart-quantuty-increase">+</button>
                </div>
                <button class="cart-delete" id="cart-delete"></button>
                <p>${price}</p>
            </div>
        </div>
        `
    }
}



