module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "postgres.dtcsolution.vn"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "db_hanet_faceid"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "KcrFZRvIl2AI4spYq27sI3PooPlllYf6GYY8PNfGsTeBHUBRI8RBqojbbuuG25gX"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
