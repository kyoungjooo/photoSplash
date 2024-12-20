import CardItem from "../../components/card/card.jsx";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navigation/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import * as Style from "../../page/index/indexStyle.js";
import { useRecoilValue } from "recoil";
import { imageData } from "../../store/selectors/imgSelector.jsx";
import DialogDetail from "../../components/dialog/dialogDetail.jsx";
import { useState } from "react";

const Home = () => {
  const imgSelector = useRecoilValue(imageData);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="cardWrapper">
        <Navbar />
        <Header />
        <Style.CardWrapper>
          {imgSelector.data.results.map((card) => {
            return (
              <CardItem card={card} key={card.id} handleDialog={setOpen} />
            );
          })}
        </Style.CardWrapper>

        <Footer />
        {isOpen && <DialogDetail />}
      </div>
    </>
  );
};
export default Home;
