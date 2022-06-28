/**
 * axios二次封装
 */

import axios from "axios";
import { TIME_OUT } from "../constants";
import { settingsStore } from "@/store";

const store = settingsStore();

const { serverAddress, serverPort } = store.settings;
const baseURL = `http://${serverAddress}:${serverPort}/`

const instance = axios.create({
  baseURL,
  timeout: TIME_OUT
})

console.log(instance);

export default instance;