import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// 여기서 state가 필요 없어서 class component도 필요 없음
// this file render the movie!
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return(
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="geners__genre">
                            {/* index = id와 비슷 */}
                            {   genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}. . .</p>
                    {/* 요약본이 너무 길다 싶으면 summary.slice(길이 설정) */}
                </div>
            </Link>
        </div>
    );
}
// Movie라는 component를 생성하면 사용할 수 있음
// props는 아래 propsTypes를 통해 정의

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
// propTypes는 number, string, bool, func, node 등 다양하게 존재

export default Movie;
// export를 해야 다른 JS file에서 Movie라는 component를 사용할 수 있음