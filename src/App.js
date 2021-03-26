import React, { useState, useCallback } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import CardDetailPanel from "./components/CardDetailPanel";

function App() {
  const cardListItems = [
    {
      id: 0,
      date: "May 5 ",
      title: "Test",
      summaryContent: "Testestest",
      content: "This  is large content",
      tagList: [1, 2, 3],
    },
    {
      id: 1,
      date: "May 3 ",
      title: "Test323",
      summaryContent: "Testestest",
      content: "This  is large content5234523453",
      tagList: [1, 2, 3],
    },
    {
      id: 2,
      date: "May 1 ",
      title: "Test423",
      summaryContent: "Testestest",
      content: "This  is large content2345234",
      tagList: [1, 2, 3],
    },
  ];

  const [selectedCard, setSelectedCard] = useState({});

  const onCardClick = useCallback((id) => {
    setSelectedCard(cardListItems.find((item) => item.id === id));
  }, []);

  return (
    <div className="layout">
      <Header name="test"></Header>
      <div className="wrapper">
        <LeftPanel cardListItems={cardListItems} onCardClick={onCardClick} />
        <CardDetailPanel selectedCard={selectedCard}></CardDetailPanel>
      </div>
    </div>
  );
}

export default App;
