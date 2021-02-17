import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HousesForm } from "../HousesForm/HousesForm";



import "./HouseGallery.scss"


export function HousesGallery(props){

    const [filterHouses,setFilterHouses] =  useState([]);
    const history=useHistory();

    const searchHouse = (houseName) =>{

        const findHouses = props.houses.filter(house => {

        return house.name.toLowerCase().includes(houseName.toLocaleLowerCase());
        })
        setFilterHouses(findHouses);
    }

    const initialFilterHouses = () => {

        setFilterHouses(props.houses)
    }

    useEffect(initialFilterHouses, [props.houses]);


    return(
        
        <div >
            <div className="d-flex justify-content-between search-container">
                <HousesForm fnClickedSearch={searchHouse}/>
                <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')} ></span>
            </div>
                 
            <div   className="d-flex flex-wrap  c-houses-gallery__scroll" >
                {/* <SimpleBar style={{ maxHeight: 300}}>  */}
                
                    {filterHouses
                    .filter(house =>house.logoURL)
                    .map((house,i) =>
                        <div className="col-2 App" key={i}>
                            <figure className="c-houses-gallery__figure">
                            <Link to= {'/houses/'+ house.name}>
                                <img className="c-houses-gallery__img" src={house.logoURL} alt={house.name}/>
                            </Link>
                            </figure>
                            <figcaption className="c-houses-gallery__figcaption">{house.name}</figcaption>
                        </div>
                    
                    )}

                {/* </SimpleBar> */}
            </div>
            
            
        </div>
    );
}