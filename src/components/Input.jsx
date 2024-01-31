import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

const Input = (props) => {
    const {name,placeholder,...rest}=props
  return (
    <div>
        <Field id={name} name={name} placeholder={placeholder} {...rest}  className="form-control" />
        {/* <ErrorMessage name={name} component={TextError} /> */}
    </div>
  )
}

export default Input