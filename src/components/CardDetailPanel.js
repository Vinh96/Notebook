import React from "react";

export default function CardDetailPanel(props) {
  const { selectedCard } = props;
  return <div>{selectedCard.content}</div>;
}
