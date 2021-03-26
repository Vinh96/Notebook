import Card from "./Card";

export default function CardList({ cardListItems, onCardClick }) {
  return cardListItems.map((item) => (
    <Card {...item} key={item.id} onCardClick={onCardClick} />
  ));
}
