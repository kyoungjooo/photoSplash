import * as Style from "./headerStyle";

const Header = () => {
  return (
    <>
      <Style.Header>
        <Style.HeaderLogoBox>
          <img src="" alt="" />
          <Style.HeaderLogoBoxTitle>PhotoSplash</Style.HeaderLogoBoxTitle>
        </Style.HeaderLogoBox>
        <Style.HeaderProfileBox>
          <Style.HeaderProfileBoxButton>사진제출</Style.HeaderProfileBoxButton>
          <Style.HeaderProfileBoxButton>북마크</Style.HeaderProfileBoxButton>
          <Style.HeaderProfileBoxUserName>
            userName
          </Style.HeaderProfileBoxUserName>
        </Style.HeaderProfileBox>
      </Style.Header>
    </>
  );
};
export default Header;
