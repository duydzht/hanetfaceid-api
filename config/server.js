module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1340),
  url: "https://qltuyenquang.daihoidoan.net",
  app: {
    keys: env.array("APP_KEYS", [
      "G7qjaWHoeADCClzmFCNphA==",
      "GPJAxfyZMwwRAcOKghEUjA==",
      "3pvITCUmInqPKLCiIoCnDA==",
      "1lxpg4f7zICxgQ6JT+7AXQ==",
    ]),
  },
});
