module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/face/checkin-qrcode",
      handler: "custom-face.checkinByQrCode",
    },
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/face/checkin-qrcode-1",
      handler: "custom-face.checkinByQrCode1",
    },
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/face/checkin-code",
      handler: "custom-face.checkinByCode",
    },
  ],
};
