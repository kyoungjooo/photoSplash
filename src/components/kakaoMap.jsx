import React from "react";
import { Map } from "react-kakao-maps-sdk";

function KakaoMap(props) {
  const searchPlaces = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  };

  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log("data", data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
      return;
    }
  }
  return (
    <div>
      <form onSubmit={searchPlaces}>
        <input type="text" name="keyword" />
        <button type="submit">검색하기</button>
      </form>

      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "1000px", height: "600px" }}
        level={3}
      />
    </div>
  );
}

export default KakaoMap;
