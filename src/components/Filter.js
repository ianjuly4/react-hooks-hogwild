import React from "react"


function Filter({greased, handleGreased, sortBy, handleNameSort}){

    return(
        <div>
           
                <select value={sortBy} onChange={handleNameSort}>
                <option value="name">Sort by name</option>
                <option value="weight">Sory by weight</option>
                </select>
            <label>
                Greased?
                <input  
                    type= "checkbox" 
                    checked={greased}
                    onChange={()=>handleGreased()}
                    />
           </label>
        </div>
    )
}
export default Filter;