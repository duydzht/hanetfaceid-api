module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "frame-ancestors": ["'self'", "http://localhost:*", "checkin.dtcsolution.vn"], // Thay "yourdomain.com" bằng tên miền của bạn
        },
      },
    },
  },
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
        maxFileSize: 100 * 2048 * 2048,
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
