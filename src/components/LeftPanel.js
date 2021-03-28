import "./LeftPanel.css";
import CardList from "./CardList";
import AddNoteButton from "./Button";
export default function LeftPanel(props) {
  const { cardListItems, onCardClick } = props;
  return (
    <div className="panel-container">
      <div class='button-container'>
        <AddNoteButton text="Add new note"></AddNoteButton>
      </div>
      <CardList
        cardListItems={cardListItems}
        onCardClick={onCardClick}
      ></CardList>
    </div>
  );
}
