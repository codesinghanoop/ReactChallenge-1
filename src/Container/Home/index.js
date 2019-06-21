import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import HomeContent from '../../Components/HomeContent'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripCount: {
                club: 0,
                trek: 0,
                tropic: 0,
                total: 0
            }
        }
    }
    render() {
        const { tripCount } = this.state
        return (
        <div>
            <HomeContent totalTrips={tripCount.total} club={tripCount.club} trek={tripCount.trek} tropic={tripCount.tropic}/>
        </div>)
    }

    componentDidMount() {
        this.filterTripLocation()
    }

    filterTripLocation = () => {
      const clubCount = this.props.tripData.filter((ele) => ele.type === 'club').length;
      const trekCount = this.props.tripData.filter((ele) => ele.type === 'trek').length;
      const tropicCount = this.props.tripData.filter((ele) => ele.type === 'tropic').length;
      const tripCount = {
        club: clubCount,
        trek: trekCount,
        tropic: tropicCount,
        total: this.props.tripData.length
      }
      this.setState({
        tripCount
      })
    }
}

const mapStateToProps = (state) => {
 return { tripData: state.tripData }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps) (Home)
