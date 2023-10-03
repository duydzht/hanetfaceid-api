module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "nvn+Js/JNaQ30DsSDiPqJQ=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "CTRSiO8amPu0vQ/CASYjDg=="),
  },
});
