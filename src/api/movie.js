let URL = 'http://10.10.1.228:8888';
// let URL = 'http://172.16.2.153:8888';
//
import qs from 'qs';

export async function fetchTypeList(){
    let res = await fetch(`${URL}/tencentMovieType/list`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchMovieList(movie){
    let res = await fetch(`${URL}/tencentMovie/list?` + qs.stringify(movie), {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}


export async function fetchMovieById(id){
    let res = await fetch(`${URL}/tencentMovie/${id}`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchHotMovies(){
    let res = await fetch(`${URL}/tencentMovie/hotList`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}

export async function fetchHighMovies(){
    let res = await fetch(`${URL}/recommend/10`, {
        method: 'GET',
    })
    let {data} = await res.json();
    return data;
}


