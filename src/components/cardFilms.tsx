import Image from "next/image";
import Rating from "./rating";

type movie = {
  id: number
  title: string
  genres: genre[]
  overview: string
  voteAverage: number
  posterPath: string
  releaseDate: string
  //adult: boolean
}

type genre = {
  id: number
  name: string
}

export default function CardFilm({id, title, genres, overview, voteAverage, posterPath, releaseDate}: movie ) {
  return(
    <>
    <div className="card card-compact w-72 bg-base-100 shadow-xl px-3 py-5 mx-3 my-3">
      <Image src={"https://image.tmdb.org/t/p/original"+posterPath} width={150} height={80} alt={title} 
            className="rounded-lg mx-auto object-cover"/>
      <div className="card-body">

        <h2 className="card-title">{title}</h2>
        <p>{overview}</p>
        <div className="badge badge-outline badge-sm">{releaseDate}</div>
        <div className="flex flex-row justify-between">
          <div className="card-actions">
            <Rating key={id} voteAverage={voteAverage} id={id}/>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div> 
        </div>               
      </div> 

      <div className="card-actions justify-end">
        {genres.map((genre) => <div key={genre.id} className="badge badge-secondary badge-outline">{genre.name}</div>)}
      </div>
    </div>
    </>
  );
}