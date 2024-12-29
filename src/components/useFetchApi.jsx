import { useQuery } from "@tanstack/react-query";

const useFetchApi = (keyword, position) => {
  const { lat, lng } = position;

  const REST_API_KEY = "4204a784b585a8239660d9b734ceb612";
  const headers = new Headers({ Authorization: `KakaoAK ${REST_API_KEY}` });

  const { data, isLoading, error } = useQuery({
    queryKey: ["documents", keyword, lng, lat],
    queryFn: async () => {
      if (!lng || !lat) return null; // 위치값 초기화 방어
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?x=${lng}&y=${lat}&radius=10000&query=${keyword}`,
        { headers }
      );
      return response.json();
    },
    enabled: lng !== 0 && lat !== 0, // 위치값이 0일 때는 호출하지 않음
  });

  return { data, isLoading, error };
};

export default useFetchApi;
