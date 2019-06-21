import React from 'react'


const TripFooter = (props) => {
    return (
        <div className="tripFooterContainer">
           <label>
               Filter by:
           </label>
           <span onClick={() => props.filterTrip('all')}>
               All
           </span>
           <span onClick={() => props.filterTrip('trek')}>
               Treks
           </span>
           <span onClick={() => props.filterTrip('club')}>
               Clubs
           </span>
           <span onClick={() => props.filterTrip('tropic')}>
               Tropic
           </span>
        </div>
    )
}

export default TripFooter;
