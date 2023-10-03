module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "hanetfaceid_tq"),
      user: env("DATABASE_USERNAME", "hanetfaceid_tq"),
      password: env("DATABASE_PASSWORD", "7y6c4a0k"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
