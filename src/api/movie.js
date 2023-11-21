// let URL = 'http://120.25.208.81:7001';
let URL = 'http://192.168.2.8:7001';
//
import qs from 'qs';

export async function fetchTypeList(){
    let res = await fetch(`${URL}/tencentmovietype/list`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchMovieList(movie){
    let res = await fetch(`${URL}/tencentmovie/list?` + qs.stringify(movie), {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}


export async function fetchMovieById(id){
    let res = await fetch(`${URL}/tencentmovie/${id}`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchHotMovies(){
    let res = await fetch(`${URL}/tencentmovie/hotList`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchHighMovies(){
    let res = await fetch(`${URL}/tencentmovie/highList`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}


