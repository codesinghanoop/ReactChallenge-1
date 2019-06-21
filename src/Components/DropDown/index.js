import React from 'react'
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const TextInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <Select
        native
        {...field}
        {...props}
    >
          <option value='club'>Club</option>
          <option value='trek'>Trek</option>
          <option value='tropic'>Tropic</option>
    </Select>
)

export default TextInput
