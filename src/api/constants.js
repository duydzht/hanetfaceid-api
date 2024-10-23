const PROD = process.env.NODE_ENV === "production";
const HANET_CLIENT_ID = "081fef03a1fa84d30474f2fe9b9b1127";
const HANET_CLIENT_SECRET = "1fa1586721a684850f9c6b6bccb26d82";
const HANET_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwOTM4NzExMzE2NTczNjU4MDgiLCJlbWFpbCI6Im5hdHVhbi5vcmdAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMDgxZmVmMDNhMWZhODRkMzA0NzRmMmZlOWI5YjExMjciLCJ0eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiaWF0IjoxNzI5NjcyNzM4LCJleHAiOjE3NjEyMDg3Mzh9.c0toloIYZT43hPtBgG0V2I9pFO169Ak53kwdxMY8_Lw";
const HANET_REFRESH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwOTM4NzExMzE2NTczNjU4MDgiLCJlbWFpbCI6Im5hdHVhbi5vcmdAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMDgxZmVmMDNhMWZhODRkMzA0NzRmMmZlOWI5YjExMjciLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTcyOTY3MjczOCwiZXhwIjoxNzYxMjA4NzM4fQ._fdRzfBnp3doMwXJFqwSuZ689KOJeEk5PBhVq8hR0ok";
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
