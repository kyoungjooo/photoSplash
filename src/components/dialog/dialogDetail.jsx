import * as Style from "./dialogStyle";

const DialogDetail = () => {
  return (
    <>
      <Style.DialogWrapper>
        <Style.Dialog>
          <Style.DialogHeader>
            <Style.Close>
              <Style.CloseBtn>{/* 아이콘 */}닫기</Style.CloseBtn>
              <Style.CloseAuth src="" alt="" />
              <Style.CloseAuthName></Style.CloseAuthName>
            </Style.Close>
            <Style.BookMark>
              <Style.BookMarkBtn>{/* 아이콘 */}북마크</Style.BookMarkBtn>
              <Style.BookMarkBtn>{/* 아이콘 */}다운로드</Style.BookMarkBtn>
            </Style.BookMark>
          </Style.DialogHeader>
          <Style.DialogBody>
            <Style.DialogImg />
          </Style.DialogBody>
          <Style.DialogFooter>
            <Style.InfoBox>
              <Style.InfoBoxItem>
                <Style.InfoBoxItemLabel>이미지 크기</Style.InfoBoxItemLabel>
                <Style.InfoBoxItemValue>
                  상세 데이터 조회
                </Style.InfoBoxItemValue>
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
