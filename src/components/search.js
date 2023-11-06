import React,{ useState } from "react";
import DataBase from "../DataBases/movieDataBase";
import MovieCards from "./cards";
function SearchMovie(){
        const [input,setInput]=useState("")
        let MovieData= DataBase;
        const handlechange=(e)=>{
            e.preventDefault();
            setInput(e.target.value);
        };
        if (input.length>0){
            MovieData=MovieData.filter((i)=>{
                return i.title.includes(input);
            });
        }
        return(
            <div>
                <div className="searchbar">
                <input
                type="text"
                placeholder="Search movie here BOI"
                onChange={handlechange}
                value={input}></input>
                </div>
                            {/* Pass the filtered movie data as a prop to MovieCards */}
            <MovieCards movieData={MovieData} />
            </div>
        )
    }

export default SearchMovie;