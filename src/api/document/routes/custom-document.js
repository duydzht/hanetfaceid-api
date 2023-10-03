module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/documents/access",
      handler: "custom-document.getDocument",
    },
  ],
};
