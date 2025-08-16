function MovieCard({movie}){
    function onLikeClick(){
        alert("Liked")
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <img src="./assets/like.png" alt="like" className="like-btn" onClick={onLikeClick}/>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>


}

export default MovieCard