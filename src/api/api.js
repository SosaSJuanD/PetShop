import axios from "axios"

export const api = axios.create({
    baseURL:"http://localhost:5000",
})

export const buscar = async(url, serData) =>{
    const respuesta = await api.get(url)
    serData(respuesta.data)
}




