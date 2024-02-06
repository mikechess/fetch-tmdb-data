import { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [movies, setMovies] = useState();

  const apikey = import.meta.env.VITE_API_KEY;
  const popular = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apikey}`).then((response) => {
      const results = response.data.results;
      console.log(results);
    })
  }

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
