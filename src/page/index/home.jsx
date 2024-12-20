import CardItem from "../../components/card/card.jsx";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navigation/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import * as Style from "../../page/index/indexStyle.js";
import { useRecoilValue } from "recoil";
import { imageData } from "../../store/selectors/imgSelector.jsx";

const Home = () => {
  const imgSelector = useRecoilValue(imageData);
  return (
    <>
      <div className="cardWrapper">
        <Navbar />
        <Header />
        <Style.CardWrapper>
          {imgSelector.data.results.map((card) => {
            return <CardItem card={card} key={card.id} />;
          })}
        </Style.CardWrapper>

        <Footer />
      </div>
    </>
  );
};
export default Home;
