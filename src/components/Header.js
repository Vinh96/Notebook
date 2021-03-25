
export default function Header(props){
    return (
        <header className="top-bar">
            <div>{props.name}</div>
            <input className="search-bar"></input>
        </header>
    )
}