import { Card } from "../components";
import { useState, useEffect} from "react";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=817d754b375d2efa5619f570128e4b23");
      const data = await response.json();
      setMovies(data.results); //api ko results matra line vaneko
    }
    fetchMovies();
  }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-3 gap-4">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />

          )) }
        </div> 
      </section>
    </main>
  )
}
