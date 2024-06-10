const PROD = process.env.NODE_ENV === "production";
const HANET_CLIENT_ID = "237b97f1c8a5b22c3db61ab34f68dd27";
const HANET_CLIENT_SECRET = "65f78199f8116529128e489cdce27e7f";
const HANET_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OTY0NjY0NDE3MTUwNjY0MjkiLCJlbWFpbCI6ImluZm9AYTIzLnZuIiwiY2xpZW50X2lkIjoiMjM3Yjk3ZjFjOGE1YjIyYzNkYjYxYWIzNGY2OGRkMjciLCJ0eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiaWF0IjoxNzE3OTkzMzA2LCJleHAiOjE3NDk1MjkzMDZ9.s1N_S8lL9NHcGKbfkoFiorp4sXi1V7tZTP3q_U9Gc88";
const HANET_REFRESH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OTY0NjY0NDE3MTUwNjY0MjkiLCJlbWFpbCI6ImluZm9AYTIzLnZuIiwiY2xpZW50X2lkIjoiMjM3Yjk3ZjFjOGE1YjIyYzNkYjYxYWIzNGY2OGRkMjciLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTcxNzk5MzMwNiwiZXhwIjoxNzQ5NTI5MzA2fQ.XgZPc2DAtqDzcCBxBNyQUeDqj128AfHQ-oFtZi6V3cw";
const BASE_URL = PROD ? "https://socket.notipay.vn" : "http://localhost:1340";

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
