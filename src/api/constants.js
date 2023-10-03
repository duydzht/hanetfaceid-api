const PROD = process.env.NODE_ENV === "production";
const HANET_CLIENT_ID = "081fef03a1fa84d30474f2fe9b9b1127";
const HANET_CLIENT_SECRET = "1fa1586721a684850f9c6b6bccb26d82";
const HANET_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwOTM4NzExMzE2NTczNjU4MDgiLCJlbWFpbCI6Im5hdHVhbi5vcmdAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMDgxZmVmMDNhMWZhODRkMzA0NzRmMmZlOWI5YjExMjciLCJ0eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiaWF0IjoxNjU4MjI2OTM4LCJleHAiOjE2NjA4MTg5Mzh9.Ey_Hwy1-Ec1Q8-LVcJK-U2gxppPW2rS2OVPcAhopIsE";
const HANET_REFRESH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwOTM4NzExMzE2NTczNjU4MDgiLCJlbWFpbCI6Im5hdHVhbi5vcmdAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMDgxZmVmMDNhMWZhODRkMzA0NzRmMmZlOWI5YjExMjciLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY1ODIyNjkzOCwiZXhwIjoxNjYwODE4OTM4fQ.uWj-fNX6rxqgzcleexQ3ze1YnhyHcAbzsGDjXLStSZI";

const BASE_URL = PROD
  ? "https://qltuyenquang.daihoidoan.net"
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
