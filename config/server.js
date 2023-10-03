module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1340),
  url: "http://103.143.142.67:1340",
  app: {
    keys: env.array("APP_KEYS", [
      "G7qjaWHoeADCClzmFCNphA==",
      "GPJAxfyZMwwRAcOKghEUjA==",
      "3pvITCUmInqPKLCiIoCnDA==",
      "1lxpg4f7zICxgQ6JT+7AXQ==",
    ]),
  },
});
