const get = require("lodash/get");
const { DataType } = require("../../constants");
const { handleFaceData } = require("../../face/controllers/custom-face");
const {
  handleCheckinData,
} = require("../../checkin/controllers/custom-checkin");

module.exports = {
  async hanetData(ctx, next) {
    const data = ctx.request.body;
    console.log("hanetData", data);
    const dataType = get(data, "data_type", "");
    switch (dataType) {
      case DataType.LOG:
        handleCheckinData(data);
        break;
      case DataType.DEVICE:
        break;
      case DataType.PERSON:
        handleFaceData(data);
        break;
      case DataType.PLACE:
        break;
      default:
        break;
    }

    const entry = await strapi.entityService.create("api::hanet.hanet", {
      data: {
        data,
      },
    });

    return { entry };
  },
};
