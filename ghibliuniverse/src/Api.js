const url = "https://ghibliapi.herokuapp.com/films";

// eslint-disable-next-line
export default {
  getMovies() {
    fetch(url)
      .then((res) => res.json())
      .then((obj) => {
        /* return obj; */
        console.log(obj);
      });
  },
};
