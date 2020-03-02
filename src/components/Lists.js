import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function Lists(props) {
  const handleItemClick = async title => {
    const data = await fetch(
      "http://omdbapi.com/?apikey=a2148006&t=" + encodeURI(title)
    ).then(res => res.json());
    props.showPage(data);
  };

  return (
    <div id="list">
      <ul>
        {props.data.map(({Title}, i) => (
          <li key={i} onClick={() => handleItemClick(Title)}>
            <Link to={`/show/${Title}`}>{Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists; //TOC class 전체를 보내는 함수
