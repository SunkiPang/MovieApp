import React from 'react';


export function MovieDetailContent({match}) {
  // const [movie, setMovie] = React.useState()
  // const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({
    loading: true,
    movie: undefined
  })

  React.useEffect(()=>{

    setData({loading:true})
    fetch(
      "http://omdbapi.com/?apikey=a2148006&t=" + encodeURI(match.params.movieTitle)
    ).then(res => res.json())
    .then((data)=>{
      setData({loading:false, movie: data})
      debugger;
    })
  }, [match.params.movieTitle, setData])

  const {loading, movie} = data
  if(loading) {
    return <div id='article'><h4>Loading...</h4></div>
  }
  if(!movie) {
    return <div id='article'><h4>Not Found</h4></div>
  }
  
    return (
       <div id="article">
           <h2>{movie.Title}</h2>
           <img src={movie.Poster} width="300px"/>
           <p>{movie.Year}</p>
           <p>{movie.Director}</p>
           <p>{movie.Actors}</p>
           <p>{movie.Plot}</p>
       </div>
    );
  
}


export function WelcomeContent() {
  return (
    <div id="article">
        <h2>초기화면</h2>
        <img src='https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg' alt='welcome image' width="300px"/>
        <p>검색창에 영화제목을 입력하세요.</p>
        <p>또는 기본적으로 제공되어 있는 리스트의 제목을 누르면 화면에 영화정보가 나타납니다.</p>
        <p>옵션은 기본적으로 제목검색으로 설정되어 있습니다.</p>
        <p>(옵션은 제목과 IMDb ID를 선택할 수 있습니다.)</p>
    </div>
  );
}

export function SearchDoneContent() {
  return (
    <div id="article">
        <h2>검색 완료</h2>
        <img src='https://cdn.pixabay.com/photo/2015/10/30/12/14/search-1013911__340.jpg' alt='search image' width="300px"/>
        <p>왼쪽의 리스트에서 영화를 클릭하세요!</p>
    </div>
  );
}

export function SearchErrorContent() {
  return (
    <div id="article">
        <h2 style={{color:'red'}}>Error</h2>
        <img src='https://cdn.pixabay.com/photo/2019/02/04/08/38/pixel-cells-3974187_960_720.png' alt='error image' width="300px"/>
        <p>검색 결과가 없습니다. 다시 입력하세요!</p>
    </div>
  );
}
