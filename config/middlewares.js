module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: '10mb',  // Đặt giới hạn form
      jsonLimit: '10mb',  // Đặt giới hạn JSON
      textLimit: '10mb',  // Đặt giới hạn text
      formidable: {
        maxFileSize: 100 * 1024 * 1024,
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
