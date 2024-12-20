import { selector } from "recoil";
import axios from "axios";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";
import { useEffect } from "react";

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {
    //어떤 함수를 통해서 조회하겠다고 선언
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_KEY = "Y9J_nlVidH9q4szP9OgijKcz3JlFmH5IvEDjv3efp24";
    const PER_PAGE = 30; //한 페이지당 나타나는 이미지 수
    //pageValue 페이지네이션
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      return res.data.results;
    } catch (error) {
      console.log(error);
    }
  },
});
