import React, { Component } from 'react';

class Lists extends Component {
  render() {
    console.log('TOC render');
    var lists = [];
    var data = this.props.data;
    var i = 0;

    while(i < data.length){ //data로 받아온 영화의 수만큼 lists에 push >> 영화의 수만큼만 리스트가 만들어짐. 
      lists.push(
        <li key={i}>
          <a href={"/content/"}
            onClick={function(title, e){ //리스트의 제목이 클릭이 되었을 때 디테일한 영화정보를 검색하고 fetch로 받아오는 함수.
              e.preventDefault();
              fetch('http://omdbapi.com/?apikey=a2148006&t='+ encodeURI(title))
                .then(function(response){
                  response.json().then(function(data){ //response타입을 json으로 받아야 한다. text로 받았다가 읽지를 못해서 4시간 붙들고 있었음...
                    console.log(data);
                    this.props.showPage(data);
                  }.bind(this))
                }.bind(this));
            }.bind(this, data[i].Title)
          }>{data[i].Title}</a>
          </li>);
      i++;
    }
    return (
      <div id="list">
        <ul>
          {lists}
        </ul>
      </div>
    );
  }
}

export default Lists; //TOC class 전체를 보내는 함수
//TOC라는 파일 안에 여러가지 변수나 함수를 어떤 것을 외부에서 사용할 수 있도록 허용하는 것이 export임.
