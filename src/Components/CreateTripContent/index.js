import React from 'react'
import CreateTripForm from '../CreateTripForm'

const CreateTripContent = (props) => {
    return (
        <div className='formContainer'>
            <CreateTripForm createTripAction={props.createTripAction} />
        </div>
    )
}

export default CreateTripContent
