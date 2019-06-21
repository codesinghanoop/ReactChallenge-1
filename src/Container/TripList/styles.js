import React from 'react'
import styled from 'styled-components'

const TripListContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        color: #343fef;
        background-color: rgba(197, 197, 197, 0.2);
        height: 100vh;
        width: 100vw;
        flex-direction: column;

        .tableContainer {
            height: 50%;
            width: 60%;
            display: flex;
            justify-content: center;
        }

        .tripFooterContainer {
            flex-direction: row;
            display: flex;
            justify-content: space-around;
            height: 20%;
            width: 60%;
            span {
                cursor:pointer;
            }
        }
`

export default TripListContainer
