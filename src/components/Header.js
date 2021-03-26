import "./Header.css";
export default function Header(props) {
  return (
    <div className="top-bar">
      <div>{props.name}</div>
      <input className="search-bar"></input>
    </div>
  );
}
