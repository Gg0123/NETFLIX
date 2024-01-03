const API_KEY = 'edf9094891e098501a56995c9063d9b0';

const requests = {
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRatedVideos: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

