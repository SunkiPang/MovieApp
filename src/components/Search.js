import React, { Component } from "react";

// Hooks
function Search(props) {
  const [type, setType] = React.useState("s");
  const [searchText, setSearchText] = React.useState("");

  async function handleSearch(e) {
    e.preventDefault();
    const { setError, onSubmit } = props;

    const res = await fetch(
      `http://omdbapi.com/?apikey=a2148006&${type}=${searchText}`
    ); //검색 타입과 입력내용을 이용해서 omdb에 검색.
    const data = await res.json();

    if (data.Response === "False") {
      //검색결과가 없을 시 에러화면 출력
      setError();
    } else {
      //검색결과가 있을 시 setState로 결과값 전송
      onSubmit(data.Search);
    }
  }

  return (
    <div id="search">
      <form action="/search" method="post" onSubmit={handleSearch}>
        
          <p>
            <input
              type="text"
              placeholder="영화 제목을 입력하세요."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </p>
          <p>
            <label>검색옵션</label>
            <select
              required="required"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="s">제목</option>
              <option value="i">IMDb ID</option>
            </select>
              <button type="submit">검색</button>
          </p>
        
      </form>
    </div>
  );
}

export default Search;
