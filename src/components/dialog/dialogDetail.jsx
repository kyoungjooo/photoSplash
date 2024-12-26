import { useEffect } from "react";
import * as Style from "./dialogStyle";

const DialogDetail = ({ imgData, handleDialog }) => {
  const closeDialog = (e) => {
    handleDialog(false);
  };

  useEffect(() => {
    //esc 누르면 dialog 닫기
    const escKeyDownCloseDialog = (e) => {
      if (e.key === "Escape") closeDialog();
    };

    document.addEventListener("keydown", escKeyDownCloseDialog);

    return () => document.removeEventListener("keyDown", escKeyDownCloseDialog);
  }, [closeDialog]);

  return (
    <>
      <Style.DialogWrapper onClick={closeDialog}>
        <Style.Dialog onClick={(e) => e.stopPropagation(e)}>
          <Style.DialogHeader>
            <Style.Close>
              <Style.CloseBtn onClick={closeDialog}>
                {/* 아이콘 */}닫기
              </Style.CloseBtn>
              <Style.CloseAuth src="" alt="" />
              <Style.CloseAuthName>
                {imgData.user.first_name}
              </Style.CloseAuthName>
            </Style.Close>
            <Style.BookMark>
              <Style.BookMarkBtn>{/* 아이콘 */}북마크</Style.BookMarkBtn>
              <Style.BookMarkBtn>{/* 아이콘 */}다운로드</Style.BookMarkBtn>
            </Style.BookMark>
          </Style.DialogHeader>
          <Style.DialogBody>
            <Style.DialogImg src={imgData.urls.small} />
          </Style.DialogBody>
          <Style.DialogFooter>
            <Style.InfoBox>
              <Style.InfoBoxItem>
                <Style.InfoBoxItemLabel>이미지 크기</Style.InfoBoxItemLabel>
                <Style.InfoBoxItemValue>
                  {imgData.width} X {imgData.height}
                </Style.InfoBoxItemValue>
                <Style.InfoBoxItemLabel>업로드</Style.InfoBoxItemLabel>
                <Style.InfoBoxItemValue>
                  {imgData.created_at.split("T")[0]}
                </Style.InfoBoxItemValue>
                <Style.InfoBoxItemLabel>다운로드</Style.InfoBoxItemLabel>
                <Style.InfoBoxItemValue>{imgData.likes}</Style.InfoBoxItemValue>
              </Style.InfoBoxItem>
            </Style.InfoBox>
            <Style.TagBox>
              <Style.TagBoxTag>태그 데이터</Style.TagBoxTag>
            </Style.TagBox>
          </Style.DialogFooter>
        </Style.Dialog>
      </Style.DialogWrapper>
    </>
  );
};
export default DialogDetail;
