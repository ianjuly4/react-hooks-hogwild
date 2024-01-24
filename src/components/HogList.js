import React, {useState} from "react";
import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";

function HogList(){
    const [greased, setGreased] = useState(false)
    const [sortBy, setSortBy] = useState("name")
    
    console.log(hogs)

    const filteredGreasedHogs = hogs.filter((hog)=>{
        if(greased){
            return hog.greased
        }else{
            return true
        }
    })

    function handleGreased(){
        setGreased(!greased)
    }
    function handleNameSort(sortBy){
        setSortBy(sortBy)
    }
 
    const filteredNameWeight = filteredGreasedHogs.sort((hogA, hogB) => {
        if (sortBy === "name") {
            return hogA.name.localeCompare(hogB.name) ;
        }else{
            return hogA.weight - hogB.weight;
        }
    })
    const displayedHogs = filteredNameWeight.map((hog)=>{
        return <Tile key={hog.name} hog={hog} />
    })

    return(
        <div>
            <Filter greased={greased} 
            handleGreased={handleGreased}
            filteredNameWeight={filteredNameWeight}
            sortBy={sortBy}
            handleNameSort={handleNameSort}
           />
            {displayedHogs}
        </div>
    )
}
export default HogList;