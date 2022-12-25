import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";
import CircularJSON from "circular-json";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("This is a BollywoodBack Server api");
});

app.get("/movies", async (req, res) => {
  console.log(req.query);
  const movies = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&with_original_language=hi&release_date.gte=${req.query.date}&release_date.lte=2003-05-01&with_watch_monetization_types=flatrate`
  );
  const temp = CircularJSON.stringify(movies);
  const data = JSON.parse(temp);
  let len = data?.data.results.length;
  res.send(data?.data?.results[len - 1]);
});

app.listen(PORT, () => {
  console.log(`Server Running on port - ${PORT}`);
});
