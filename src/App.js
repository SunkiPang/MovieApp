import React, { Component } from "react";
import "./App.css";
import Lists from "./components/Lists";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  WelcomeContent,
  SearchDoneContent,
  SearchErrorContent,
  MovieDetailContent
} from "./components/Content";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome", //화면조정을 위한 변수
      show: null, //영화의 디테일 정보 저장 객체
      data: [
        //리스트의 title 및 간략한 정보를 저장 객체
        { Title: "Thor" },
        { Title: "Harry Potter and the Prisoner of Azkaban" },
        { Title: "The Lord of the Rings: The Fellowship of the Ring" },
        { Title: "The Avengers" }
      ]
    }; //state

  }

  render() {
    //어떤 html을 그릴 것인가를 결정하는 함수 (하위의 컴퍼넌트들이 바뀌면 다시 render함수가 실행됨 >> html이 업데이트 됨.)
    const { mode } = this.state;

    return (
      //html파일로 return
      <Router>
      <div id="wrapper">
       
        <div id="left_bar">
          <Search //검색
            onSubmit={function(_search) {
              this.setState({
                data: _search,
                mode: "search"
              });
            }.bind(this)}
            setError={function() {
              this.setState({
                mode: "error"
              });
            }.bind(this)}
          ></Search>
          <Lists //영화 리스트창
            showPage={function(_show) {
              this.setState({
                mode: "show",
                show: _show
              });
            }.bind(this)}
            data={this.state.data}
          ></Lists>
        </div>
        
          <Route exact path="/" component={WelcomeContent} />
          <Route path="/show/:movieTitle" component={MovieDetailContent} />
          <Route path="/search/:searchText" component={SearchDoneContent} />
          <Route path="/error" component={SearchErrorContent} />
        
          {/* {mode === "welcome" ? (
            <WelcomeContent/>
          ) : mode === "show" ? (
            <MovieDetailContent movie={this.state.show} />
          ) : mode === "search" ? (
            <SearchDoneContent/>
          ) : mode === "error" ? (
            <SearchErrorContent/>
          ) : null} */}

      </div>
      </Router>
    );
  }
}

export default App;
