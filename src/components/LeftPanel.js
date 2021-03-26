import "./LeftPanel.css";
import CardList from "./CardList";
export default function LeftPanel(props) {
  const { cardListItems, onCardClick } = props;
  return (
    <div className="panel-container">
      <CardList
        cardListItems={cardListItems}
        onCardClick={onCardClick}
      ></CardList>
    </div>
  );
}
