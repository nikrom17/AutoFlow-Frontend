import HomePage from "@pages/homePage/homePage";

export default (route: String) => {
  switch (route) {
    case "/":
      return HomePage;
    default:
      throw Error; //todo make this error more specific
  }
};
