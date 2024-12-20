import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../components/card/card.jsx";
import Header from "../components/header/header.jsx";
import Navbar from "../components/navigation/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import * as Style from "../components/card/cardStyle.js";

const Home = () => {
  const [imageUrl, setImagegUrl] = useState([]);
  const getData = async () => {
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_KEY = "Y9J_nlVidH9q4szP9OgijKcz3JlFmH5IvEDjv3efp24";
    const PER_PAGE = 30; //한 페이지당 나타나는 이미지 수
    //pageValue 페이지네이션
    const searchValue = "korea";
    const pageValue = 100;

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      if (res.status === 200) {
        setImagegUrl(res.data.results);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="cardWrapper">
        <Navbar />
        <Header />
        <Style.CardWrapper>
          {imageUrl.map((card, i) => {
            return <CardItem card={card} key={i} />;
          })}
        </Style.CardWrapper>

        <Footer />
      </div>
    </>
  );
};
export default Home;
