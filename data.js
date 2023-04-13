const movieData = [
    {
        img: "./img/img1.jpg",
        movieName: "Gangs of London",
        text: "asjdhbalsjdb"
    },
    {
        img: "./img/img2.jpg",
        movieName: "Snowfall",
        text: "asjdhbalsjdb"
    },
    {
        img: "./img/img3.jpg",
        movieName: "All American",
        text: "asjdhbalsjdb"
    },
    {
        img: "./img/img4.jpg",
        movieName: "God father of Harlem",
        text: "asjdhbalsjdb"
    }
];

const images = []

for (let i = 0; i < movieData.length; i++) {
    const image = new Image();
    image.src = movieData[i];
    images.push(image);
  }

  export default movieData;