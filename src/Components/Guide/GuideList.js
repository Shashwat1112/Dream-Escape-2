import React, { useEffect, useState } from "react";
import { listGuides } from "../Services/GuideService";
import { useNavigate } from "react-router-dom";

const GuideList = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    listGuides()
      .then((response) => {
        setGuides(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  //Dynamically changing page headings
  function updateGuide(id) {
    navigate(`/Update_Guide/${id}`);
  }

  function addNewGuide() {
    navigate(`/Add_Guide`);
  }

  function updateGuide(id) {
    navigate(`/Update_Guide/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Guides</h2>
      <button className="btn btn-primary mb-2" onClick={addNewGuide}>
        Add Guide
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            <th>Date of Birth</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {guides.map((guide) => (
            <tr key={guide.id}>
              <td>{guide.id}</td>
              <td>{guide.name}</td>
              <td>{guide.email}</td>
              <td>{guide.mobile}</td>
              <td>{guide.date}</td>
              <td>{guide.password}</td>
              <td>{guide.gender}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateGuide(guide.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuideList;
