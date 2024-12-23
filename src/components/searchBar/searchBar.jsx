import { useRecoilState } from "recoil";
import * as Style from "./searchBarStyle";
import { searchState } from "../../store/atoms/searchState";
const SearchBar = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const getSearchValue = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    if (searchText === "") {
      setSearch("korea");
    } else {
      setSearch(searchText);
    }
  };
  return (
    <>
      <Style.SearchWarpper>
        <Style.SearchForm onSubmit={getSearchValue}>
          <Style.SearchInput
            type="text"
            name="search"
            placeholder="찾으실 이미지를 검색하세요"
          />
          <Style.SearchBtn>검색</Style.SearchBtn>
        </Style.SearchForm>
      </Style.SearchWarpper>
    </>
  );
};
export default SearchBar;
