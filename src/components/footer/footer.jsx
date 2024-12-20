import * as Style from "./footerStyle";
const Footer = () => {
  return (
    <Style.Footer>
      <Style.Pagination>
        <Style.PaginationBtn>이전</Style.PaginationBtn>
        {/* 변경될 UI 부분 */}
        <span>1</span>
        <Style.PaginationBtn>이전</Style.PaginationBtn>
      </Style.Pagination>
    </Style.Footer>
  );
};
export default Footer;
