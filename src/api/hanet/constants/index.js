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

module.exports = {
  DataType,
  ActionType,
};
