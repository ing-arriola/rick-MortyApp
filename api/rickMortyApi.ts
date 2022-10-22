import axios from "axios";

const rickMortyApi = axios.create({
    baseURL:'https://rickandmortyapi.com/api'
})

export default rickMortyApi