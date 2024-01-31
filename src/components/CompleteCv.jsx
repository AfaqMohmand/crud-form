import React, { useState } from "react";
import { Link,useParams  } from "react-router-dom";
import { Formik, Form,useFormikContext } from "formik";
import * as Yup from "yup";
import cvData from "./CV.json";
import { useGlobalContext } from "../Context";
import FormikControls from "./FormikControls";

const CompleteCv = () => {
  const [sidebarArr, setSidebarArr] = useState([
    { name: "Basic Information", type: "BasicInformation" },
    { name: "Work Experience", type: "WorkExperience" },
    { name: "Education", type: "Education" },
    { name: "Social", type: "Social" },
    { name: "Skills", type: "Skills" },
    { name: "Hobbies", type: "Hobbies" },
    { name: "References", type: "References" },
  ]);
  const [name,setName]=useState("")
  const [index, setIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("BasicInformation");
  const {setArrayValues,arrayvalues}=useGlobalContext()
  const params=useParams()

  const nameHandler=(e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  
  const validationSchema = Yup.object({});
  
  const onSubmit = (values) => {
    setArrayValues([...arrayvalues,{values,name}])
    console.log("🚀 ~ file: CompleteCv.jsx:34 ~ onSubmit ~ values", {values,name})
  }
  const initialValues= params?.id ?{...arrayvalues[params?.id]?.values}: ""
  console.log("initialValues", initialValues)

  return (
    <>
      <div className="bg-dark d-flex justify-content-around p-3">
        <p className="text-white">
          Create, maintain, publish, and share your CVs for free
        </p>
        <Link to="/dashboardTable">
          <p className="text-white text-decoration-none text-decoration-underline">
            Dashboard
          </p>
        </Link>
        <p className="text-white">dummy@gmail.com</p>
      </div>
      <div className="d-flex justify-content-around p-3">
        <h4>Resume Maker</h4>
        <p>
          23635 <small>downloads</small>
        </p>
        <p>
          32552 <small>saved CV's</small>
        </p>
      </div>
        <div className="row w-100 p-5">
      <div className="">
      <label htmlFor="">Enter Resume Name</label>
          <input type="text" placeholder="Enter Name" className="form-control m-2" onChange={nameHandler} />
      </div>
          {/* sidebar Array */}
          <div className="col-4">
            <ul className="list-group">
              {sidebarArr.map((item, ind) => {
                return (
                  <li
                    className={`list-group-item ${
                      ind === index ? "active" : ""
                    }`}
                    key={ind}
                    onClick={() => {
                      setIndex(ind);
                      setCategoryName(item.type)
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
{/* --------------------------------------- */}
          <div className="col-8">
          <Formik
             initialValues={initialValues ? initialValues : []}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
           >
            {(formik) => (
              <Form className="d-flex justify-content-between flex-wrap ">
                {cvData.map(
                  ({ label, category,...inputAttributes}, ind) => {
                    return (
                      categoryName === category && (
                        <div className="col-6 px-3 py-0 " key={ind}>
                          <label htmlFor={inputAttributes.name} className="form-label">
                            {label}
                          </label>
                            <FormikControls {...inputAttributes} />
                        </div>
                      )
                      );
                    }
                    )}
            <button type="submit" disabled={formik.isSubmitting} className="btn btn-primary">Submit</button>
              </Form>
            )}
      </Formik>
          </div>
        </div>
    </>
  );
};

export default CompleteCv;
