import React from 'react'
import TextField from '@material-ui/core/TextField';

const DatePicker = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
    }) => (
    <TextField 
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        style={{ width: "100%" }}
        InputLabelProps={{
          shrink: true,
        }}
        {...field} 
        {...props}
    />
)

export default DatePicker
