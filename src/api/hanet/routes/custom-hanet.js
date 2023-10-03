module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/hanet/data",
      handler: "custom-hanet.hanetData",
    },
  ],
};
