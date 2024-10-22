module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "postgres.dtcsolution.vn"),
      port: env.int("DATABASE_PORT", 15432),
      database: env("DATABASE_NAME", "db_hanet_faceid"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "pFQ49xd7QCge3aKHXBPNwGYMjk4tnU52"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 60000,
    },
  },
});
