import axios from "axios";

axios.defaults.baseURL = "https://api.wisey.app/api/v1";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const getToken = async () => {
  try {
    const { data } = await axios.get("/auth/anonymous?platform=subscriptions");
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllcourses = async () => {
  try {
    await getToken();
    const { data } = await axios.get("/core/preview-courses");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = async (id) => {
  try {
    await getToken();
    const { data } = await axios.get(`/core/preview-courses/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
