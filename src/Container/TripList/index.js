import React, { Component } from 'react'
import { connect } from 'react-redux'
import TripData from '../../Components/TripData'
import TripFooter from '../../Components/TripFooter'
import TripListContainer from './styles.js'

class TripList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripData: this.props.tripData
        }
    }
    render() {
        const { tripData } = this.state
        return (
        <TripListContainer>
            <TripData tripData={tripData} />
            <TripFooter filterTrip={this.filterTrip} />
        </TripListContainer>
        )
    }

    filterTrip = (type) => {
        const { tripData } = this.props;
        this.setState({
            tripData: type === 'all' ? tripData : tripData.filter((ele, i) => ele.type === type)
        })
    }
}

const mapStateToProps = (state) => {
    return { tripData: state.tripData }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps) (TripList)
