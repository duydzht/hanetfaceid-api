const axios = require("axios");
const FormData = require("form-data");
const queryString = require("query-string");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

const {
  PROD,
  HANET_ACCESS_TOKEN,
  PLACE_ID,
  BASE_URL,
} = require("../../../constants");

const uniqueCodeForUser = async (event) => {
  const {
    result: { id, code },
  } = event || {};
  if (!code) {
    await strapi.entityService.update("api::face.face", id, {
      data: {
        code: nanoid(),
      },
    });
  }
};

const registerFaceIDByUrl = async (event) => {
  const {
    result: { id, name, title, avatar: { url } = {} },
  } = event || {};

  const form = new FormData();
  form.append("token", HANET_ACCESS_TOKEN);
  form.append("name", name);
  form.append("aliasID", id);
  form.append("placeID", PLACE_ID);
  form.append("title", title);
  form.append("url", `${BASE_URL}${url}`);

  try {
    const registerByUrlResponse = await axios.post(
      "https://partner.hanet.ai/person/registerByUrl",
      form
    );
    console.log("registerFaceIDByUrl.response", registerByUrlResponse);
    const { data: { data: { personID } = {} } = {} } =
      registerByUrlResponse || {};
    if (personID) {
      await strapi.entityService.update("api::face.face", id, {
        data: {
          personID,
        },
      });
    }
  } catch (error) {
    console.log("registerFaceIDByUrl.error", error);
  }
};

const updateByFaceUrl = async (event) => {
  console.log("updateByFaceUrl.event", event);
  try {
    const {
      result: { id, name, title, avatar: { url } = {}, personID },
    } = event || {};
    if (personID) {
      const updateByFaceUrlResponse = await axios.post(
        "https://partner.hanet.ai/person/updateByFaceUrl",
        queryString.stringify({
          token: HANET_ACCESS_TOKEN,
          url: `${BASE_URL}${url}`,
          aliasID: `${id}`,
          placeID: PLACE_ID,
        })
      );

      const updateInfoResponse = await axios.post(
        "https://partner.hanet.ai/person/updateInfo",
        queryString.stringify({
          token: HANET_ACCESS_TOKEN,
          aliasID: id,
          placeID: PLACE_ID,
          title,
          name,
        })
      );
    } else {
      //Nếu chưa có personID thì sẽ dùng hàm tạo mới
      await registerFaceIDByUrl(event);
    }
  } catch (error) {}
};

const removeByPlace = async (event) => {
  const { result: { id } = {} } = event || {};

  await axios.post(
    "https://partner.hanet.ai/person/removeByPlace",
    queryString.stringify({
      token: HANET_ACCESS_TOKEN,
      aliasID: id,
      placeID: PLACE_ID,
    })
  );
};

module.exports = {
  async afterCreate(event) {
    await uniqueCodeForUser(event);
    // if (PROD) {
    //   await registerFaceIDByUrl(event);
    // }
  },
  async afterUpdate(event) {
    await uniqueCodeForUser(event);
    // if (PROD) {
    //   await updateByFaceUrl(event);
    // }
  },
  async afterDelete(event) {
    // if (PROD) {
    //   await removeByPlace(event);
    // }
  },
};
