import React from 'react'
import styled from 'styled-components'

const CreateTripContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        color: #343fef;
        background-color: rgba(197, 197, 197, 0.2);
        height: 100vh;
        width: 100vw;
        flex-direction: column;

        .formContainer {
            height: 50%;
            width: 60%;
            display: flex;
            justify-content: center;

            form {
                display: flex;
                flex-direction: column;
                width: 40%;
                justify-content: space-between;
            }

            Select {
                height: 20px;
            }

            input {
                height: 20px;
                width: 100%;
            }
            button {
                height: 50px;
            }
            button: hover {
                background: #483F53;
            }
        }
`

export default CreateTripContainer;
