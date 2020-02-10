import React, { Component } from 'react';

class Search extends Component {
  render() {
    console.log('Subject render');
    return (
      <div id="search">
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            var user_input = e.target.movie_name.value; //검색창의 value를 저장하는 변수
            var type = e.target.option.value; //option의 value를 저장하는 변수

            fetch('http://omdbapi.com/?apikey=a2148006&'+type+'='+user_input) //검색 타입과 입력내용을 이용해서 omdb에 검색.
              .then(function(response){
                response.json().then(function(data){ //response타입을 json으로 받아야 한다. text로 받았다가 읽지를 못해서 4시간 붙들고 있었음...
                  if(data.Response === "False"){ //검색결과가 없을 시 에러화면 출력
                    this.props.setError();
                  }
                  else { //검색결과가 있을 시 setState로 결과값 전송
                    this.props.onSubmit(data.Search);
                  }
                }.bind(this))
              }.bind(this));
          }.bind(this)}
        >
          <p><input type="text" name="movie_name" placeholder="영화 제목을 입력하세요."></input></p>
          <p>
            <select name="option" required="required"><option value="s">검색옵션..</option><option value="s">제목</option><option value="i">IMDb ID</option></select>
            <button id="btn_search"type="submit">검색</button></p>
        </form>
      </div>
    );
  }
}

export default Search;
