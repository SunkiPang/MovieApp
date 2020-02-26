import React from "react";

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
            {Title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists; //TOC class 전체를 보내는 함수
