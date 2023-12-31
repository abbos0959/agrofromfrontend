import axios from "axios";
const baseUrl = "https://agroformnew.vercel.app/api/posts";

let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(
    "https://agroformnew.vercel.app/api/posts",
    newObject,
    config
  );
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const object = {
  setToken,
  getAll,
  create,
  remove,
};

export default object;
