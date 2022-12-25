import axios from "axios";
export const urlMovie='https://api.themoviedb.org/3/';
export function search(date1, date2){
    return axios.get(urlMovie + 'discover/movie',
        {
            params: {
                'api_key': process.env.API_KEY,
                'sort_by': 'popularity.desc',
                'with_original_language': 'hi',
                'primary_release_date.gte': date1,
                'primary_release_date.lte': date2
            }
        }

    )
}
export function trailer(id)
{
    return axios.get(urlMovie + 'movie/' + id +'/videos',
    {
        params: {
            'api_key': process.env.API_KEY,
        }
    }

) 
}
