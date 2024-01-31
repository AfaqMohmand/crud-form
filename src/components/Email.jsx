import { Field } from 'formik'
import React from 'react'

const Email = (props) => {
    const {name,placeholder,...rest}=props
  return (
    <div>
        <Field id={name} name={name} placeholder={placeholder} {...rest} className="form-control" />
    </div>
  )
}

export default Email