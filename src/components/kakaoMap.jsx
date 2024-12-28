import React, { useEffect, useState } from "react";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import locationIcon from "../assets/images/location.svg";
function RenderKakaoMap() {
  // 지도의 중심좌표
  const [center, setCenter] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  // 현재 위치
  const [position, setPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
    navigator.geolocation.watchPosition((pos) => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  // const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
  // const marker = new kakao.maps.Marker({
  //   position: markerPosition,
  // });

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

      <KakaoMap
        center={center}
        style={{ width: "100vw", height: "100vh" }}
        level={3}
      >
        <MapMarker
          image={{
            src: locationIcon,
            size: { width: 48, height: 48 },
          }}
          position={position}
        />
      </KakaoMap>
    </div>
  );
}

export default RenderKakaoMap;
