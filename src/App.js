import React, { useState, useCallback } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import CardDetailPanel from "./components/CardDetailPanel";
import Note from './models/Note';
function App() {
  let cardListItems = [
    {
      id: 0,
      date: "May 5 ",
      title: "Business Plan",
      summaryContent: "I want to create  a note to track  our business plan and some todos",
      content: "I want to create  a note to track  our business plan and some todos",
      tagList: [1, 2, 3],
    },
    {
      id: 1,
      date: "May 5 ",
      title: "Business Plan 5",
      summaryContent: "I want to create  a note to track  our business plan and some todos some todosand s some todosand s some todosand s some todosand s some todosand s some todosand s",
      content: "I want to create  a note to track  our business plan and some todos and some todosand some todosand some todos",
      tagList: [1, 2, 3],
    },
    {
      id: 2,
      date: "May 5 ",
      title: "Business Plan 3 ",
      summaryContent: "I want to create  a note to track  our business plan and some todos",
      content: "I want to create  a note to track  our business plan and some todos and some todosand some todos",
      tagList: [1, 2, 3],
    },
  ];

  cardListItems.push(new Note(3,"May 5" ,"Test class base","Content base" , "OOPOOOOOO"))

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
