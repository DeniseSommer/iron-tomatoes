import api from "./api";

//--API CALLS--
//--Get Popular Movies--
export const getPopularMovies = async () => {
    try {
        const response = await api.get("/movie/popular");
        return response.data.results;
    } catch (error) {
        console.log(error)
        throw new Error("Could not show popular movies. Please try again later. 😔🎬");
    }
}