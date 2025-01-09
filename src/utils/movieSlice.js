import { createSlice } from "@reduxjs/toolkit";

const moviewSlice=createSlice({
    name:"movie",
    initialState:{
        movieList:null,
        trailor:null,
        showmovie:{
            adult: false,
            backdrop_path: "/cjEcqdRdPQJhYre3HUAc5538Gk8.jpg",
            id: 845781,
            original_language: "en",
            original_title: "Red One",
            overview: "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous tracker in a globe-trotting, action-packed mission to save Christmas.",
            popularity: 2249.629,
            poster_path: "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
            release_date: "2024-10-31",
            title: "Red One",
            video: false,
            vote_average: 7.032,
            vote_count: 1881,
        },
        recommendationShow:null,
        topRatedMovie:null,
        popularMovie:null
    },
    reducers:{
        addMovie:(state,action)=>{
            state.movieList=action.payload;
        },
        addTailor:(state,action)=>{
            state.trailor=action.payload;
        },
        addShowMovie:(state,action)=>{
            state.showmovie=action.payload;
        },
        addRecommendation:(state,action)=>{
        state.recommendationShow=action.payload;
        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        }
    }

})

export default moviewSlice.reducer;
export const {addMovie,addTailor,addShowMovie,addRecommendation,addTopRatedMovie, addPopularMovie} = moviewSlice.actions;