import CardFilm from "../components/cardFilms";
import Footer from "../components/footer";
import NavBar from "../components/nabBar";

async function getMovies() {
  const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming', {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTFmZDE4ODc2NWI0NDI4NzBjOGJhODRjZjY0YTJlOCIsInN1YiI6IjY0ZGE1YzYwYjc3ZDRiMTEzZmM0MjYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kyIJwA29tb7EUiQKx7Uh1OVgqQE0aGoOt93HRXVVqk',
      'accept': 'application/json'
    }
  });
 
  if (!movies.ok) {
    throw new Error('Failed to fetch data');
  }
 
  /* return JSON.parse(movies.json(), any[]); */
  return movies.json();
}

export default async function Home() {
  const movieList = await getMovies();

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {/* {movieList.map((movie) => <CardFilm key={movie.id} id={movie.id} title={movie.title} genres={movie.genres} overview={movie.overview} voteAverage={movie.vote_average} posterPath={movie.poster_path} releaseDate={movie.release_date}/>)} */}
        {movieList.results.map((movie) => (
          <CardFilm 
            key={movie.id} 
            id={movie.id} 
            title={movie.title} 
            genres={movie.genres} 
            overview={movie.overview} 
            voteAverage={movie.vote_average} 
            posterPath={movie.poster_path} 
            releaseDate={movie.release_date}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
}
