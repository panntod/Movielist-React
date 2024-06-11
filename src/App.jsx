import React from "react";
import { popularMovie, searchMovie, nowPlaying } from "./api";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import NowPlayingMovie from "./component/NowPlayingMovie";
import PopularMovieList from "./component/PopularMovieList";
import Landingpage from "./component/Landingpage";
import Loading from "./component/Loading";

const App = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    nowPlaying()
      .then((result) => {
        setNowPlayingMovie(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });

    popularMovie()
      .then((result) => {
        setPopularMovies(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const search = async (q) => {
    const title = document.querySelector(".title");
    if (q === "") {
      popularMovie()
        .then((result) => {
          setPopularMovies(result);
          setSearchResults([]);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      const query = await searchMovie(q);
      setPopularMovies([]);
      setSearchResults(query.results);
      title.innerHTML = `Search "${q}"`;
    }
  };

  return (
    <React.Suspense fallback={<Loading />}>
      <div className="App">
        <Navbar search={search} />
        {searchResults.length > 0 ? (
          <PopularMovieList
            popularMovies={searchResults}
            isLoading={isLoading}
          />
        ) : (
          <>
            <Landingpage />
            <NowPlayingMovie
              nowPlaying={nowPlayingMovie}
              isLoading={isLoading}
            />
            <PopularMovieList
              popularMovies={popularMovies}
              isLoading={isLoading}
            />
          </>
        )}
        <Footer />
      </div>
    </React.Suspense>
  );
};

export default App;
