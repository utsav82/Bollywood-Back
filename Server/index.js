import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { search, trailer } from "./tmdb.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("This is a BollywoodBack Server api");
});

app.get("/movie", async (req, res) => {
  console.log(req.query);

  var dateCalc = new Date(req.query.date);
  // sample url is http://localhost:3001/movies?date=2003-11-25
  var date2 = dateCalc.toISOString().substring(0, 10);
  dateCalc.setMonth(dateCalc.getMonth() - 2);
  var date1 = dateCalc.toISOString().substring(0, 10);
  var result_movie;
  var trailer_video;
  const movies = await search(date1, date2);
  for (var i = 0, size = movies.data.results.length; i < size; i++) {
    if (movies.data.results[i].original_language == "hi") {
      result_movie = movies.data.results[i];
      break;
    }
  }
  if (result_movie) {
    var video = await trailer(result_movie.id);
    if (video.data.results) {
      for (var i = 0, size = video.data.results.length; i < size; i++) {
        if (video.data.results[i].site == "YouTube") {
          trailer_video =
            "https://www.youtube.com/watch?v=" + video.data.results[i].key;
          if (video.data.results[i].name == "Trailer") {
            break;
          }
        }
      }
    }
  }
  console.log(trailer_video);
  res.send(result_movie);
});

app.listen(PORT, () => {
  console.log(`Server Running on port - ${PORT}`);
});
