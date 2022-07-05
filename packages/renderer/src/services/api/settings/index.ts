import { get } from "@/services/request";

export function testServerAlive() {
  return get('/match2/management/system/testServerAlive');
}