module.exports = {
  async handleCheckinData(data, emit = true) {
    const {
      id,
      date,
      mask,
      time,
      aliasID,
      placeID,
      deviceID,
      personID,
      placeName,
      deviceName,
      personName,
      personType,
      personTitle,
      detected_image_url,
    } = data;

    if (detected_image_url && time && personType) {
      let delegate = null;
      if (aliasID) {
        delegate = await strapi.entityService.findOne(
          "api::face.face",
          Number(aliasID),
          {
            populate: { avatar: true },
          }
        );
      }
      const checkinEntity = await strapi.entityService.create(
        "api::checkin.checkin",
        {
          data: {
            aliasID,
            date,
            detected_image_url,
            deviceID,
            deviceName,
            recordID: id,
            personID,
            personName,
            personTitle,
            personType,
            placeID,
            placeName,
            mask,
            time,
            face: delegate,
          },
        }
      );
      const data = { ...checkinEntity, face: delegate };
      console.log("custom-checkin.emit.data", data);
      if (emit) {
        strapi.io.emit("checkin:data", { data });
      }
      return data;
    } else {
      return null;
    }
  },
  async handleCheckinData1(data, emit = true) {
    const {
      id,
      date,
      mask,
      time,
      aliasID,
      placeID,
      deviceID,
      personID,
      placeName,
      deviceName,
      personName,
      personType,
      personTitle,
      detected_image_url,
    } = data;

    if (detected_image_url && time && personType) {
      let delegate = null;
      if (aliasID) {
        delegate = await strapi.entityService.findOne(
          "api::face.face",
          Number(aliasID),
          {
            populate: { avatar: true },
          }
        );
      }
      const checkinEntity = await strapi.entityService.create(
        "api::checkin.checkin",
        {
          data: {
            aliasID,
            date,
            detected_image_url,
            deviceID,
            deviceName,
            recordID: id,
            personID,
            personName,
            personTitle,
            personType,
            placeID,
            placeName,
            mask,
            time,
            face: delegate,
          },
        }
      );
      const data = { ...checkinEntity, face: delegate };
      if (emit) {
        strapi.io.emit("checkin:data2", { data });
      }
      return data;
    } else {
      return null;
    }
  },
};
