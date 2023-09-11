
const HomePage = {
  id: "main",
  title: "Cherry Blossom",
  render: () => {
    return `
        ${Header.render()}

        ${ModalLogIn.render()}

        ${Main.render()}
        ${MainAdditional.render()}
        ${TopRated.render()}
        ${Choice.render()}
        ${Subscribe.render()}
        ${Questions.render()}
        ${Follow.render()}
        ${Blogs.render()}
        ${Information.render()}
        ${Footer.render()}
      `;
  }
};

const CollectionPage = {
  id: "collection",
  title: "Our Collections",
  render: () => {
    return `
        ${Header.render()}
        ${Collections.render()}
        ${Footer.render()}
        ${ModalLogIn.render()}
      `;
  }
};

const AboutPage = {
  id: "about",
  title: "Страница О Нас",
  render: () => {
    return `
        ${Header.render()}
        ${About.render()}
        ${Blogs.render()}
        ${Footer.render()}
        ${ModalLogIn.render()}
      `;
  }
};

const AccountCartPage = {
  id: "accountcart",
  title: "Корзина",
  render: () => {
    return `
      ${Header.render()}
      ${ModalLogIn.render()}
      ${CartPage.render()}
      ${Footer.render()}
    `;
  }
}
