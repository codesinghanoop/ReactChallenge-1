import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateTripContent from '../../Components/CreateTripContent'
import { addTrip } from './action'
import CreateTripContainer from './styles'

class CreateTrip extends Component {
    render() {
        const { createTripAction } = this.props;
        return (
            <CreateTripContainer>
                <CreateTripContent createTripAction={createTripAction} />
            </CreateTripContainer>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    createTripAction: (data) => dispatch(addTrip(data))
})

export default connect(mapStateToProps, mapDispatchToProps) (CreateTrip)
