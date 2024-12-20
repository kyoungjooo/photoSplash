//검색어를 담당하는 상태값
import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: "korea",
});
