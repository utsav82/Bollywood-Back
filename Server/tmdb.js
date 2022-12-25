import axios from "axios";
export const urlMovie='https://api.themoviedb.org/3/';
export function search(date1, date2){
    return axios.get(urlMovie + 'discover/movie',
        {
            params: {
                'api_key': process.env.API_KEY_TMDB,
                'sort_by': 'popularity.desc',
                'with_original_language': 'hi',
                'primary_release_date.gte': date1,
                'primary_release_date.lte': date2
            }
        }

    )
}
export function trailer(name)
{
    return axios.get('https://www.googleapis.com/youtube/v3/search',
    {
        params: {
            'key': process.env.API_KEY_YT,
            'type': 'video',
            'part': 'snippet',
            'maxResults': 5,
            'q': name
           

        }
    }

) 
}
