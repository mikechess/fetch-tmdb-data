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
  }, [])

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apikey}`).then((response) => {
      const results = response.data.results;
      setMovies(results);
    })
  }

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
