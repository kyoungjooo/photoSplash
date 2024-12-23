import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { imageData } from "../../store/selectors/imgSelector";
import * as Style from "./footerStyle";
import { useState } from "react";
import { pageState } from "../../store/atoms/pageState";

const Footer = () => {
  const images = useRecoilValueLoadable(imageData);
  const [page, setPage] = useRecoilState(pageState);
  const [step, setStep] = useState(0);

  //페이지리스트 ui 생성
  const newArr = Array.from(
    { length: images.contents.total_pages },
    (_, i) => i
  );

  const length = newArr.length;
  const chunkSize = 10;
  const divide = Math.ceil(length / chunkSize);

  const res = Array.from({ length: divide }, (_, i) =>
    newArr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  const handlePage = (page) => setPage(page);
  const moveToPrev = () => {
    if (step === 0) return;
    else {
      setStep(step - 1);
      setPage(res[step - 1][0]);
    }
  };
  const moveToNext = () => {
    if (step < res[step].length - 2) {
      setStep(step + 1);
      setPage(res[step + 1][0]);
    } else {
      return;
    }
  };
  return (
    <Style.Footer>
      <Style.Pagination>
        <Style.PaginationBtn onClick={moveToPrev}>이전</Style.PaginationBtn>
        {/* 변경될 UI 부분 */}
        {res[step]?.map((page) => {
          return (
            <button onClick={() => handlePage(page)} key={page}>
              {page + 1}
            </button>
          );
        })}
        <Style.PaginationBtn onClick={moveToNext}>다음</Style.PaginationBtn>
      </Style.Pagination>
    </Style.Footer>
  );
};
export default Footer;
