import axios from "axios";
const baseUrl = "https://agroformnew.vercel.app/api/forgotpassword";

const update = async (email) => {
  const config = { email: email };
  const response = await axios.put(`${baseUrl}`, config);
  return response.data;
};

const object = {
  update,
};
export default object;
