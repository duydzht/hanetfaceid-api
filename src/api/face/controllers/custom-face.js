const get = require("lodash/get");
const dayjs = require("dayjs");
const {
  handleCheckinData,
  handleCheckinData1,
} = require("../../checkin/controllers/custom-checkin");
const {
  ActionType,
  PLACE_ID,
  DEVICE_ID,
  BASE_URL,
} = require("../../constants");

module.exports = {
  async handleFaceData(data) {
    const actionType = get(data, "action_type", "");
    console.log("handleFaceData.data", data);
    const {
      date,
      hash,
      keycode,
      placeID,
      placeName,
      personID,
      personName,
      personTitle,
      personType,
      aliasID,
      avatar,
      time,
      id,
    } = data;

    switch (actionType) {
      case ActionType.ADD:
        await strapi.entityService.create("api::face.face", {
          data: {
            date,
            hash,
            keycode,
            placeID,
            placeName,
            personID,
            personName,
            personTitle,
            personType,
            aliasID,
            avatar,
            time,
            recordID: id,
          },
        });
        break;
      case ActionType.UPDATE:
        break;
      case ActionType.DELETE:
        break;
      default:
        break;
    }
  },
  async checkinByCode(ctx, next) {
    const data = ctx.request.body;
    const { code } = data;
    let result = {};
    try {
      const faces = await strapi.entityService.findMany("api::face.face", {
        filters: {
          code,
        },
        populate: "*",
      });
      console.log("custom-face.checkinByCode.face", faces);
      if (faces[0]) {
        const face = faces[0];
        const { id, name, title, avatar: { url } = {} } = face;

        const data = {
          time: Date.now(),
          date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          aliasID: `${id}`,
          placeID: PLACE_ID,
          deviceID: DEVICE_ID,
          personID: "",
          data_type: "log",
          personName: name,
          personTitle: title,
          personType: "0",
          action_type: "update",
          detected_image_url: `${BASE_URL}${url}`,
        };

        result = await handleCheckinData(data, false);
      }
    } catch (error) {
      console.log("custom-face.checkinByCode.error", error);
    }
    return { result };
  },
  async checkinByQrCode(ctx, next) {
    const data = ctx.request.body;
    console.log("custom-face.checkinByQrCode", data);
    const { code } = data;
    let success = false;
    try {
      const faces = await strapi.entityService.findMany("api::face.face", {
        filters: {
          code,
        },
        populate: "*",
      });
      console.log("custom-face.checkinByQrCode.face", faces);
      if (faces[0]) {
        const face = faces[0];
        const { id, name, title, avatar: { url } = {} } = face;

        const data = {
          time: Date.now(),
          date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          aliasID: `${id}`,
          placeID: PLACE_ID,
          deviceID: DEVICE_ID,
          personID: "",
          data_type: "log",
          personName: name,
          personTitle: title,
          personType: "0",
          action_type: "update",
          detected_image_url: `${BASE_URL}${url}`,
        };
        console.log("custom-face.checkinByQrCode.data", data);
        await handleCheckinData(data, true);
        success = true;
      } else {
        success = false;
      }
    } catch (error) {
      console.log("custom-face.checkinByQrCode.error", error);
      success = false;
    }
    return {
      success,
    };
  },
  async checkinByQrCode1(ctx, next) {
    const data = ctx.request.body;
    console.log("custom-face.checkinByQrCode1", data);
    const { code } = data;
    let success = false;
    try {
      const faces = await strapi.entityService.findMany("api::face.face", {
        filters: {
          code,
        },
        populate: "*",
      });
      console.log("custom-face.checkinByQrCode1.face", faces);
      if (faces[0]) {
        const face = faces[0];
        const { id, name, title, avatar: { url } = {} } = face;

        const data = {
          time: Date.now(),
          date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          aliasID: `${id}`,
          placeID: PLACE_ID,
          deviceID: DEVICE_ID,
          personID: "",
          data_type: "log",
          personName: name,
          personTitle: title,
          personType: "0",
          action_type: "update",
          detected_image_url: `${BASE_URL}${url}`,
        };
        console.log("custom-face.checkinByQrCode1.data", data);
        await handleCheckinData1(data, true);
        success = true;
      } else {
        success = false;
      }
    } catch (error) {
      console.log("custom-face.checkinByQrCode1.error", error);
      success = false;
    }
    return {
      success,
    };
  },
};
