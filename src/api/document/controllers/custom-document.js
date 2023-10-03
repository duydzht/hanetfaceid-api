const bcrypt = require("bcryptjs");

module.exports = {
  async getDocument(ctx, next) {
    console.log("getDocument.query", ctx.request.query);
    const { id, password } = ctx.request.query;

    if (!id || !password) {
      return {
        error: "missing_id_parameter",
      };
    }

    const document = await strapi.entityService.findOne(
      "api::document.document",
      id,
      {
        populate: "*",
      }
    );

    if (!document) {
      return {
        error: "document_not_found",
      };
    }

    if (document.private) {
      if (!password) {
        return {
          error: "missing_password_parameter",
        };
      }

      const result = await bcrypt.compare(password, document.password);

      if (!result) {
        return {
          error: "password_not_match",
        };
      }
    }

    console.log("getDocument.document", document);

    const { title, link, createdAt, updatedAt, slug, thumb, private } =
      document;

    return {
      data: {
        attributes: {
          title,
          link,
          createdAt,
          updatedAt,
          slug,
          thumb,
          private,
        },
        id,
      },
    };
  },
};
