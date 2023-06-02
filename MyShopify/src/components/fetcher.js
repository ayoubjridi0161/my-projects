const BASE_URL = 'http://localhost:3000/';
export const fetcher = (url,setresult)=>{
    fetch(BASE_URL + url )
    .then((res)=>res.json())
    .then((data)=>{
        setresult(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}