import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { settingsStore } from "@/store";

const store = settingsStore();
const { serverAddress, managerServerPort } = store.settings;
const baseURL = `http://${serverAddress}:${managerServerPort}`;

// 创建对象
const instance = axios.create({
  baseURL,
  timeout: 0,
});

// 请求拦截
instance.interceptors.request.use((config) => {
  const baseURL = store.getBaseURL();
  config.baseURL = baseURL;
  nprogress.start();
  // config配置对象，重要属性header
  return config;
});

// 响应拦截
instance.interceptors.response.use((res) => {
  // 成功响应函数
  nprogress.done();
  return res.data;
}, (err) => {
  // 失败响应函数
  nprogress.done();
  return Promise.reject(new Error("请求出错了"));
});

const get = function (url: string, queryParam?: any) {
  return instance.get(url, queryParam);
}

const post = function (url: string, data?: any) {
  return instance.post(url, data);
}

export { instance, get, post };
