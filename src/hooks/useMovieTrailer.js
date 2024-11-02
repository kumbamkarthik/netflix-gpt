import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = () => {
    const dispatch = useDispatch();
    //fetch trailer video
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/912649/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideos();
    }, []);
}
export default useMovieTrailer;