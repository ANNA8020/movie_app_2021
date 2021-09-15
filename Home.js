import React from "react";
import axios from "axios";
// axious는 fetch 윗단계?
import Movie from "../components/Movie";
import "./Home.css";

class App extends React.Component{
  // react component (required!)
  // state 이용을 위해 class component를 사용
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
    // ES6, movies.data.data.movies 구식임
    this.setState({ movies, isLoading: false });
    // movies:movies → moives (JS가 이해하기 때문에 이렇게 써도 됌)
    // 1: setStart-movie 2: axious-movies
    // movies를 state 넣음
    // ES6 쓰자 ⍨
  };
  // async await는 JS에게 실행되는데 시간이 걸리니까 기달려줘 라는 뜻
  componentDidMount(){
      // component가 mount되자 마자 호출 됌
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    // ES6, this.state의 반복을 줄여줌
    // this.movies.state.movies ← 못생긴 코드로 하기 싫찮아? 그춍?
    // state로 부터 movies를 가져와
    return ( 
      <section className="container">
      {/* HTML처럼 보이지만 이건 JS야 (JSX라고 하면 됌) */}
      {/* HTML-class JSX-className */}
      {/* JS class 안에 있으면 component class에 의해 혼란스러워해 그래서 이름을 바꾼거야 */}
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading. . .</span>
        </div> 
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
          ))}
        </div>
        )}
    </section>
    // state를 사용해 Loading 한거야
    // map으로 부터 뭔가를 return해야 해﹗ (Remember)
    // object를 풀어줄 때 map 사용하고, jsx에서는 props를 통해서 값을 전달
    );
  }
}
export default App;