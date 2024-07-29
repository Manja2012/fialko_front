import axios from "axios";
import config from "../config";
import { contactsRoute, coursesRoute, reviewsRoute } from "./routes";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  withCredentials: true,
});

export default apiClient;

export const sendMessage = (contact) => {
  console.log(contact)
  apiClient.post(`${contactsRoute}/add`, contact);
}

export const logIn = async (email, password) => {
  const user = await apiClient.post("/user/log-in", {
    email,
    password,
  });

  return user.data;
};

export const register = (user) => apiClient.post("/user/add", user);

export const getCourses = () => apiClient.get(coursesRoute);
export const getCourseById = id => apiClient.get(`${coursesRoute}${id}`)
export const addCourse = (course) => apiClient.post(`${coursesRoute}/add`, course)

export const createReservation =  async (reservationData) => {
  console.log(reservationData)
  const response = await apiClient.post("/reservation/add", reservationData);
  return response.data;
}

export const addReview = async (review) => {
  console.log(review)
  const res = await apiClient.post(`${reviewsRoute}/${review.course}`, review);
  return res
}
  
export const checkReservation = async (courseId) => {
  const { data } = await apiClient.get(`/reservation/check/${courseId}`);
  return data.hasReserved;
};

export const getAllReservationByUser = async () => {
  const reservations = await apiClient.get("/reservation/my/reservation");
  return reservations.data
}