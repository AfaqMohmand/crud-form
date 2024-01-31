import React,{useState,useEffect, useCallback} from "react";
import { Link,useNavigate} from "react-router-dom";
import { useGlobalContext } from "../Context";

const DashboardTable = () => {
  const {arrayvalues,setArrayValues } = useGlobalContext();
  const navigate = useNavigate()

  console.log("🚀 ~ file: DashboardTable.jsx:7 ~ arrayvalues", arrayvalues)

  const deleteHandler = useCallback((index) => {
    const newItems = arrayvalues.filter((_,i) => i !== index);
    setArrayValues(newItems);
  }, [arrayvalues, setArrayValues]);
  
  const editHandler=(index) => {
    navigate(`/cv/${index}`)
  }

  return (
    <>
      <div className="bg-dark d-flex justify-content-evenly align-items-center">
        <p className="text-white p-3">
          Create, maintain, publish, and share your CVs for free
        </p>
        <Link to="/dashboardTable">
          <p className="text-white text-decoration-none">Dashboard</p>
        </Link>
        <p className="text-white">dummy@gmail.com</p>
      </div>
      <div className="d-flex p-4 flex-column">
        <p>Your CVs</p>
        <Link to="/cv">
          <button type="button" className="btn btn-primary">
            Create Resume
          </button>
        </Link>
        <p className="pt-2">
          You haven't created any CVs yet. Go ahead and create one.
        </p>
      </div>
      <div className="p-5 d-flex justify-content-center align-items-center">
        <table className="table w-75">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
              {arrayvalues.map((item,index) => {
                return (
                                  <tr key={index}>
                                    <th>{index}</th>
                                    <td>{item.name}</td>
                                    <td>
                                      <button className="btn btn-danger me-2" onClick={()=>deleteHandler(index)}>Delete</button>
                                      <button className="btn btn-secondary" onClick={()=>editHandler(index)}>Edit</button>
                                    </td> 
                                  </tr>
                                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardTable;
