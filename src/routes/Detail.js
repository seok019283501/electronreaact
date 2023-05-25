import { useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom";
import Movie from '../components/Movie'

function Detail(){
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const {id} = useParams();
    console.log(id);
    const getMovie = async() =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json();

        setMovie(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[])
    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>
            </div>}
            
            
            <div><Link to="/">home</Link></div>
        </div>
    )
    
}
export default Detail;