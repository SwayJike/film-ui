let URL = 'http://120.25.208.81:8888';
// let URL = 'http://172.16.2.153:8888';
//
import qs from 'qs';

export async function fetchTypeList(){
    let res = await fetch(`${URL}/movieTypeList`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchMovieList(movie){
    let res = await fetch(`${URL}/movieList?` + qs.stringify(movie), {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}


export async function fetchMovieById(id){
    let res = await fetch(`${URL}/movie/${id}`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchHotMovies(){
    let res = await fetch(`${URL}/hotMovieList`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchHighMovies(){
    let res = await fetch(`${URL}/highScoreMovieList`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}


