import { Field } from 'formik'
import React from 'react'
    
    const Textarea = (props) => {
        const {name,inputType,...rest}=props
      return (
        <div>
            <Field type={inputType} id={name} name={name} {...rest} className="form-control" />
        </div>
      )
    }
    
    export default Textarea