import CardFilm from "../components/cardFilms";
import Footer from "../components/footer";
import NavBar from "../components/nabBar";

async function getMovies() {
  const date = new Date().toISOString().split('T')[0];
  const URL_BR: string = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&primary_release_date.gte=${date}&sort_by=popularity.desc`;
  const URL_US: string = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&primary_release_date.gte=${date}&sort_by=popularity.desc`;
  
  const movies = await fetch(URL_BR, {
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'accept': 'application/json'
    }
  });
 
  if (!movies.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return movies.json();
}

export default async function Home() {
  const movieList = await getMovies();

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {movieList.results.map((movie) => (
          <CardFilm 
            key={movie.id} 
            id={movie.id} 
            title={movie.title} 
            genres={movie.genres} 
            overview={movie.overview || '⚠️ Ainda não há descrição em português desse filme.'} 
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
