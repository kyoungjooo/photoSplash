import React, { useEffect, useMemo, useState } from "react";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import locationIcon from "../assets/images/location.svg";
import currentIcon from "../assets/images/current.svg";
import useFetchApi from "./useFetchApi";

function RenderKakaoMap() {
  // 지도의 중심좌표
  const [center, setCenter] = useState({
    lng: 0,
    lat: 0,
  });
  // 현재 위치
  const [position, setPosition] = useState({
    lng: 0,
    lat: 0,
  });
  let { data } = useFetchApi("동물병원", position);
  console.log(data);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lng: pos.coords.longitude, lat: pos.coords.latitude });
    });
    navigator.geolocation.watchPosition((pos) => {
      setPosition({ lng: pos.coords.longitude, lat: pos.coords.latitude });
    });
  }, []);

  // getDataFromServer("동물병원", position);
  // console.log("데이터", data);

  var geocoder = new kakao.maps.services.Geocoder();
  const coords = new kakao.maps.LatLng(position.lng, position.lat);

  function searchAddrFromCoords(coords, callback) {
    // 좌표로 주소 정보를 요청
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  }

  // function handleAddress(result, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     console.log(result);
  //   } else {
  //     console.error("주소 조회 실패:", status);
  //   }
  // }
  // searchAddrFromCoords(coords, handleAddress);

  // const searchPlaces = (e) => {
  //   e.preventDefault();
  //   const keyword = e.target.keyword.value;
  //   if (!keyword) return;
  //   const ps = new kakao.maps.services.Places();
  //   ps.keywordSearch(keyword, placesSearchCB);
  // };

  // function placesSearchCB(data, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     console.log("data", data);
  //   } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
  //     alert("검색 결과가 존재하지 않습니다.");
  //     return;
  //   } else if (status === kakao.maps.services.Status.ERROR) {
  //     alert("검색 결과 중 오류가 발생했습니다.");
  //     return;
  //   }
  // }

  return (
    <div>
      {/* <form onSubmit={searchPlaces}>
        <input type="text" name="keyword" />
        <button type="submit">검색하기</button>
      </form> */}

      <KakaoMap
        center={center}
        style={{ width: "100vw", height: "100vh" }}
        level={5}
      >
        <MapMarker
          image={{
            src: currentIcon,
            size: { width: 24, height: 24 },
          }}
          position={position}
        />
        {data?.documents.map((item, i) => {
          const nearPlaces = {
            lng: parseFloat(item.x),
            lat: parseFloat(item.y),
          };
          return (
            <MapMarker
              key={i}
              image={{
                src: locationIcon,
                size: { width: 48, height: 48 },
              }}
              position={nearPlaces}
            />
          );
        })}
      </KakaoMap>
    </div>
  );
}

export default RenderKakaoMap;
