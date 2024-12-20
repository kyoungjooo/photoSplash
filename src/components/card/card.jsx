import * as Style from "./cardStyle.js";

const CardItem = ({ card }) => {
  const openDialog = () => {};
  return (
    <Style.Card onClick={openDialog}>
      <Style.CardImg src={card.urls.small} alt={card.alt_description} />
    </Style.Card>
  );
};
export default CardItem;
