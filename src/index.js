"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    process.nextTick(() => {
      // var io = require("socket.io")(strapi.server.httpServer, {
      //   cors: {
      //     origin: [
      //       "http://localhost:19006",
      //       "https://checkin.dtcsolution.vn",
      //       "https://checkin-webhook.dtcsolution.vn",
      //     ],
      //     methods: ["GET", "POST"],
      //   },
      // });
      var io = require("socket.io")(strapi.server.httpServer, {
        cors: {
          origin: "*", // Allow all origins
          methods: ["GET", "POST"], // Allow all methods
        },
      });
      io.on("connection", async function (socket) {
        console.log(`Socket user connected`);
        // send message on user connection
        socket.emit("hello", "hello");
        // listen for user diconnect
        socket.on("disconnect", () => {
          console.log("Socket user disconnected");
        });
      });
      strapi.io = io;
    });
  },
};
