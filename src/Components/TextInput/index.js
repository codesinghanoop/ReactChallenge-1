import React from 'react'
import TextField from '@material-ui/core/TextField';

const TextInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <TextField
        id="place"
        label="Place"
        margin="normal"
        {...field}
        {...props}
    />
)

export default TextInput
