import { useEffect, useState } from "react";
import axios from "axios";

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);

  const apikey = import.meta.env.VITE_API_KEY;
  const popular = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apikey}`).then((response) => {
      const results = response.data.results;
      setMovies(results);
    });
  };

  return (
    <div className="App">
      {movies.map((items) => (
        <div className="movieContainer" key={items.id}>
          <h2>{items.title}</h2>
          {items.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={`${items.title} Poster`} />
          )}

          <p>{items.release_date}</p>
        </div>
      ))}
    </div>
  )
}

export default App
