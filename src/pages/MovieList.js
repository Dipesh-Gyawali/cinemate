import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const MovieList = ({apiPath}) => {
  const { data: movies } = useFetch(apiPath);


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-3 gap-4 other:grid-cols-2  others:grid-cols-1 others:mx-24">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div> 
      </section>
    </main>
  )
}