//검색어를 담당하는 상태값
import { atom } from "recoil";

export const pageState = atom({
  key: "pageState ",
  default: 1,
});
