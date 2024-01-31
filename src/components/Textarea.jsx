    import { Field } from 'formik'
import React from 'react'
    
    const Textarea = (props) => {
        const {name,...rest}=props
      return (
        <div>
            <Field as='textarea' id={name} name={name} {...rest} className="form-control" />
        </div>
      )
    }
    
    export default Textarea