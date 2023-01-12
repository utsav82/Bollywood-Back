import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { search, trailer, TMDBtrailer } from "./tmdb.js";

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
  console.log(req.query.date);
  try {
    var dateCalc = new Date(req.query.date);
    // sample url is http://localhost:3001/movie?date=2003-11-25
    var date2 = dateCalc.toISOString().substring(0, 10);
    dateCalc.setMonth(dateCalc.getMonth() - 2);
    var date1 = dateCalc.toISOString().substring(0, 10);
    var result_movie;
    const movies = await search(date1, date2);
    for (var i = 0, size = movies.data.results.length; i < size; i++) {
      if (movies.data.results[i].original_language == "hi") {
        result_movie = movies.data.results[i];
        break;
      }
    }
    if(!result_movie)
    {
      res.status(404).send('Movie not found or invalid date entered');
    }
    res.send(result_movie);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
});

app.get("/video", async (req, res) => {
  try {
    if (req.query.id) {
      var video = await TMDBtrailer(req.query.id);
      if (video.data.results) {
        for (var i = 0, size = video.data.results.length; i < size; i++) {
          if (video.data.results[i].site == "YouTube") {
            var trailer_video = video.data.results[i].key;
            if (video.data.results[i].name == "Trailer") {
              break;
            }
          }
        }
      }
      res.send(trailer_video);
    }
    if (req.query.name) {
      const videos = await trailer(req.query.name);
      res.send(videos.data.items[0].id.videoId);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

app.listen(PORT, () => {
  console.log(`Server Running on port - ${PORT}`);
});
