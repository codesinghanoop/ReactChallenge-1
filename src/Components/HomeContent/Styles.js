import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    color: #343fef;
    background-color: rgba(197, 197, 197, 0.2);
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    .centerDiv {
        height: 50%;
        width: 60%;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        align-items: center;
        font-size: 34px;
    }
    .differentTrip {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
    .singleTrip {
        flex-direction: row;
        align-items: center;
        display: flex;
        font-size: 24px;
    }
`

export default HomeContainer
