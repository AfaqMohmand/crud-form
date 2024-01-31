import React from 'react'
import Email from './Email'
import Input from './Input'
import Textarea from './Textarea'
import Number from './Number'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import MultiSelect from './MultiSelect'

const FormikControls = (props) => {
 switch(props.inputType){
    case 'text': return <Input {...props} />
    case 'textarea':return <Textarea {...props} />
    case 'email':return <Email {...props} />
    case 'number':return <Number {...props} />
    case 'select':return <Select {...props} />
    case 'radio':return <Radio {...props} />
    case 'checkbox': return <Checkbox {...props} />
    case 'date':return <DatePicker {...props} />
    case 'isMulti':return <MultiSelect {...props} />
    default:return null
 }
}

export default FormikControls