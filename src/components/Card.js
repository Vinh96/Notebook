import React from "react";
import "./Card.css";
export default function Cards({
  id,
  date,
  title,
  summaryContent,
  tagList,
  onCardClick,
}) {
  const onCardClickItem = () => {
    onCardClick(id);
  };
  return (
    <>
      <div onClick={onCardClickItem} className="container">
        <div className="short-date-title">{date}</div>
        <div className="short-title">{title}</div>
        <div className="summary-content">{summaryContent}</div>
        <div className="tag-list">{tagList}</div>
      </div>
    </>
  );
}
