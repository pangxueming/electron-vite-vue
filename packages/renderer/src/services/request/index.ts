// 对axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { settingsStore } from "@/store";
import { ElMessage } from "element-plus";

const store = settingsStore();

const { serverAddress, serverPort } = store.settings;
const baseURL = `http://${serverAddress}:${serverPort}/`;

// 创建对象
const requests = axios.create({
  baseURL,
  timeout: 1000,
});

// 请求拦截
requests.interceptors.request.use((config) => {
  nprogress.start();
  // config配置对象，重要属性header
  return config;
});

// 响应拦截
requests.interceptors.response.use((res) => {
  // 成功响应函数
  nprogress.done();
  return res.data;
}, (error) => {
  // 失败响应函数
  ElMessage({
    message: '请求出错了',
    type: 'error',
    duration: 60000
  });
  nprogress.done();
  return Promise.reject(new Error("请求出错了"));
});

const get = function (url: string, queryParam?: any) {
  return requests.get(url, queryParam);
}

const post = function (url: string, data?: any) {
  return requests.post(url, data);
}

export { requests, get, post };
