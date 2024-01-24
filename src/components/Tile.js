import React, {useState} from "react"


function Tile({hog}){
    const [showMoreDetails, setShowMoreDetails] = useState(false)

    function handleToggleDetails(){
        setShowMoreDetails(!showMoreDetails)
    }
    return(
        <div onClick={handleToggleDetails}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name}/>
                {showMoreDetails ?(
                <div>
                    <p>specailty: {hog.specialty}</p>
                    <p>greased: {hog.greased ? "yes" : "no"}</p>
                    <p>highest medal achieved: {hog["highest medal achieved"]}</p>
                    <p>weight: {hog.weight}</p>
                </div>
            ) : null}
        </div>
    )
}
export default Tile;