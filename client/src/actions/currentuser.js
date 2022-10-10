export const setcurrentUser = (data)=>{
    return{
        type : "FETCH_USER",
        payload : data,
    }
}