import { Field } from "formik";
import React from "react";

const Radio = (props) => {
  const { name, options,inputType,label, ...rest } = props;
  return (
    <div>
      <Field name={name} {...rest} >
       {
        ({field}) => {
            return options.map(option=>{
                return (
                    <React.Fragment key={option.key}>
                        <input type={inputType} id={option.value} value={option.value}  {...field} />
                        <label htmlFor={option.value} className="ps-1">{option.value}</label>
                    </React.Fragment>
                )
            })
        }
       }
      </Field>
    </div>
  );
};

export default Radio;
