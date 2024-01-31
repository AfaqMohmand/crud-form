import { Field } from 'formik'
import React from 'react'

const Number = (props) => {
    const {name,placeholder,inputType}=props
  return (
    <div>
        <Field name={name} id={name} placeholder={placeholder}  className="form-control" type={inputType} />
    </div>
  )
}

export default Number