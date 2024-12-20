import { useRecoilValueLoadable } from "recoil";
import { useState } from "react";
import CardItem from "../../components/card/cardItem.jsx";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navigation/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import * as Style from "../../page/index/indexStyle.js";

import { imageData } from "../../store/selectors/imgSelector.jsx";
import DialogDetail from "../../components/dialog/dialogDetail.jsx";

const Home = () => {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="cardContainer">
        <Navbar />
        <Header />
        <Style.CardWrapper>
          {imgSelector.state === "hasValue" ? (
            imgSelector.contents.map((card) => {
              return (
                <CardItem
                  card={card}
                  key={card.id}
                  handleDialog={setOpen}
                  getImgData={setImgData}
                />
              );
            })
          ) : (
            <div>로딩중</div>
          )}
        </Style.CardWrapper>
        <Footer />
        {isOpen && <DialogDetail imgData={imgData} handleDialog={setOpen} />}
      </div>
    </>
  );
};
export default Home;
