import React, { Component } from 'react';
import './App.css';
import Lists from './components/Lists'
import Content from'./components/Content'
import Search from './components/Search'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome', //화면조정을 위한 변수
      show:null, //영화의 디테일 정보 저장 객체
      data:[ //리스트의 title 및 간략한 정보를 저장 객체
        {Title:'Thor'},
        {Title:'Harry Potter and the Prisoner of Azkaban'},
        {Title:'The Lord of the Rings: The Fellowship of the Ring'},
        {Title:'The Avengers'}
      ],
      welcome:{title:"초기화면", desc:'검색창에 영화제목을 입력하세요.',
               desc2:'또는 기본적으로 제공되어 있는 리스트의 제목을 누르면 화면에 영화정보가 나타납니다.',
               desc3:'옵션은 기본적으로 제목검색으로 설정되어 있습니다.',
               desc4:'(옵션은 제목과 IMDb ID를 선택할 수 있습니다.)',
               poster:'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg'}, //초기 화면을 위한 객체
      search:{title:"검색 완료", desc:'왼쪽의 리스트에서 영화를 클릭하세요!', poster:'https://cdn.pixabay.com/photo/2015/10/30/12/14/search-1013911__340.jpg'}, //검색 화면을 위한 객체
      error:{title:"Error", desc:'검색 결과가 없습니다. 다시 입력하세요!', poster:'https://cdn.pixabay.com/photo/2019/02/04/08/38/pixel-cells-3974187_960_720.png'} //에러 화면을 위한 객체
    } //state
  }

  render() { //어떤 html을 그릴 것인가를 결정하는 함수 (하위의 컴퍼넌트들이 바뀌면 다시 render함수가 실행됨 >> html이 업데이트 됨.)
    console.log('App render');
    var _title, _desc, _article, _poster, _plot, _year, _actors, _director = null;
    var _desc2, _desc3, _desc4 = null;
    var i = 0;
    var temp = null;


    //mode에 따라 content컨퍼넌트 화면을 알맞게 변경
    if(this.state.mode === 'welcome'){ //초기화면
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _desc2 = this.state.welcome.desc2;
      _desc3 = this.state.welcome.desc3;
      _desc4 = this.state.welcome.desc4;
      _poster = this.state.welcome.poster;
      _article = <Content title={_title} desc={_desc} desc2={_desc2}
                          desc3={_desc3} desc4={_desc4} poster={_poster}></Content>
    }
    else if (this.state.mode === 'show'){ //영화 디테일 화면
      _title = this.state.show.Title;
      _plot = "Plot : " + this.state.show.Plot;
      _poster = this.state.show.Poster;
      _year = "Year : " + this.state.show.Year;
      _actors = "Actors : " + this.state.show.Actors;
      _director = "Director : " + this.state.show.Director;
      _article = <Content title={_title} poster={_poster} desc={_year}
                          desc2={_director} desc3={_actors} desc4={_plot}></Content>
    }
    else if (this.state.mode === 'search'){ //검색 직후 화면
      _title = this.state.search.title;
      _desc = this.state.search.desc;
      _poster = this.state.search.poster;
      _article = <Content title={_title} desc={_desc} poster={_poster}></Content>
    }
    else if (this.state.mode === 'error'){ //에러화면 (검색 결과가 없을시)
      _title = this.state.error.title;
      _desc = this.state.error.desc;
      _poster = this.state.error.poster;
      _article = <Content title={_title} desc={_desc} poster={_poster}></Content>
    }

    return ( //html파일로 return
      <div id="wrapper">
        <div id="left_bar">
          <Search //검색
            onSubmit={function(_search){
              this.setState({
                data:_search,
                mode:'search'
              })
            }.bind(this)}
            setError={function(){
              this.setState({
                mode:'error'
              })
            }.bind(this)}></Search>
          <Lists //영화 리스트창
            showPage={function(_show){
              this.setState({
                mode:'show',
                show:_show
              })
            }.bind(this)}
            data={this.state.data}></Lists>
        </div>
        {_article}
      </div>
    );
  }
}

export default App;
