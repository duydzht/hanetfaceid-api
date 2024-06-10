const PROD = process.env.NODE_ENV === "production";
const HANET_CLIENT_ID = "fcc5ff92d705d35a7698b802c5a540ab";
const HANET_CLIENT_SECRET = "eb664034619c584d8e575f3884a90211";
const HANET_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OTY0NjY0NDE3MTUwNjY0MjkiLCJlbWFpbCI6ImluZm9AYTIzLnZuIiwiY2xpZW50X2lkIjoiZmNjNWZmOTJkNzA1ZDM1YTc2OThiODAyYzVhNTQwYWIiLCJ0eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiaWF0IjoxNzE4MDE2MTIxLCJleHAiOjE3NDk1NTIxMjF9.6Ksxpl4jlaR_Yn-Njt5_vycVS-04GxSzaSIU1pwEuBc";
const HANET_REFRESH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OTY0NjY0NDE3MTUwNjY0MjkiLCJlbWFpbCI6ImluZm9AYTIzLnZuIiwiY2xpZW50X2lkIjoiZmNjNWZmOTJkNzA1ZDM1YTc2OThiODAyYzVhNTQwYWIiLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTcxODAxNjEyMSwiZXhwIjoxNzQ5NTUyMTIxfQ.5PJAQRSD913vvKpu1CWlaeL7HpW1FosgWUxTdv-zVUI";
const BASE_URL = PROD
  ? "https://checkin-webhook.dtcsolution.vn"
  : "http://localhost:1340";

const PLACE_ID = "11497";
const DEVICE_ID = "C21282M233";

const DataType = {
  LOG: "log",
  DEVICE: "device",
  PERSON: "person",
  PLACE: "place",
};

const ActionType = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
};

//personType: có các giá trị (0,1,2,3,4,5,6) trong đó giá trị (0 là Nhân viên) hoặc (1 là Khách hàng) còn (2,3,4,5 là người lạ), (6 là ảnh chụp hình từ camera).

const PersonType = {
  Delegate: [0],
  Customer: [1],
  stranger: [2, 3, 4, 5],
};

module.exports = {
  PROD,
  BASE_URL,
  PLACE_ID,
  DEVICE_ID,
  HANET_CLIENT_ID,
  HANET_CLIENT_SECRET,
  HANET_ACCESS_TOKEN,
  HANET_REFRESH_TOKEN,
  DataType,
  ActionType,
};
