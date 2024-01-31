import { Field } from 'formik'
import React from 'react'

const Select = (props) => {
    const {name,options,...rest}=props
  return (
    <div>
        <Field id={name} name={name} as='select' {...rest} className="form-control">
        {
            options.map(option=>{
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                )
            })
        }
        </Field>
    </div>
  )
}

export default Select