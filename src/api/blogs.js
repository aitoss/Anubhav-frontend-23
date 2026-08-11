import axios from "axios";
import { BACKEND_URL } from "../constants";

export const createBlog = (payload) =>
  axios.post(`${BACKEND_URL}/blogs`, payload).then((r) => r.data);

export const updateBlog = (id, payload) =>
  axios.patch(`${BACKEND_URL}/blogs/${id}`, payload).then((r) => r.data);

export const getBlog = (id) =>
  axios.get(`${BACKEND_URL}/blog/${id}`).then((r) => r.data);

export const getBlogSummaryStatus = (id) =>
  axios.get(`${BACKEND_URL}/blog/${id}/summary/status`).then((r) => r.data);

export const requestBlogSummary = (id) =>
  axios.get(`${BACKEND_URL}/blog/${id}/summary`).then((r) => r);

export const getBlogSummary = (id) =>
  axios.get(`${BACKEND_URL}/blog/${id}/summary`).then((r) => r.data);
