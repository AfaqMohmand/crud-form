import { Field } from 'formik'
import React from 'react'
import Select from 'react-select'
const MultiSelect = (props) => {
    const {name,label,inputType, options,...rest}=props
  return (
    <div>
        <Field name={name}>
            {({ field, form }) => (
              <Select
                isMulti
                name={field.name}
                options={options}
                // value={values.flavor}
              />
            )}
          </Field>
    </div>
  )
}

export default MultiSelect