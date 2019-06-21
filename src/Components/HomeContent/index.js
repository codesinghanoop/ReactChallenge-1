import React from 'react'
import SunnyIcon from '@material-ui/icons/WbSunny';
import LandscapeIcon from '@material-ui/icons/Train';
import Tropic from '@material-ui/icons/TripOrigin';
import HomeContainer from './Styles'


const GetTripComponent = ({ value, children }) => (
    <p className='singleTrip'>
        {value}
        {children}
    </p>
)

const HomeContent = (props) => {
    return (
        <HomeContainer>
            <div className='centerDiv'>
                <p>
                    {props.totalTrips}
                </p>
                <div className='differentTrip'>
                    <GetTripComponent value={props.club}>
                        <SunnyIcon />
                    </GetTripComponent>
                    <GetTripComponent value={props.trek}>
                        <LandscapeIcon />
                    </GetTripComponent>
                    <GetTripComponent value={props.tropic}>
                        <Tropic />
                    </GetTripComponent>
                </div>
            </div>
        </HomeContainer>
    )
}

export default HomeContent
