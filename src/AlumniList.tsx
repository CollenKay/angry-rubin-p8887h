import React, { useState } from "react";
import AlumniModal from "./AlumniModal";

const initialAlumniData = [
  {
    id: 1,
    name: "John Doe",
    graduationYear: "2020", // Change from number to string
    degree: "Bachelor of Science",
    email: "john.doe@email.com",
    phone: "123-456-7890",
    employment: "Software Engineer at Tech Co",
  },
  {
    id: 2,
    name: "John Doe",
    graduationYear: "2019", // Change from number to string
    degree: "Bachelor of Science",
    email: "john.doe@email.com",
    phone: "123-456-7890",
    employment: "Software Engineer at Tech Co",
  },
  {
    id: 3,
    name: "John Doe",
    graduationYear: "2018", // Change from number to string
    degree: "Bachelor of Science",
    email: "john.doe@email.com",
    phone: "123-456-7890",
    employment: "Software Engineer at Tech Co",
  },
  // Add more data as per your HTML
];

function AlumniList() {
  const [alumniData, setAlumniData] = useState(initialAlumniData);

  const addAlumni = (newAlumni: {
    id: number;
    name: string;
    graduationYear: string; // Change to string
    degree: string;
    email: string;
    phone: string;
    employment: string;
  }) => {
    setAlumniData([...alumniData, newAlumni]);
  };

  return (
    <div>
      <h1 className="mb-4">Alumni Management</h1>
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search alumni..."
          />
        </div>
        <div className="col-md-3">
          <select id="filterGraduationYear" className="form-select">
            <option value="">All Graduation Years</option>
            {/* Dynamically populated */}
          </select>
        </div>
        <div className="col-md-3">
          <select id="filterDegree" className="form-select">
            <option value="">All Degrees</option>
            {/* Dynamically populated */}
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addAlumniModal"
          >
            <i className="fas fa-plus"></i> Add Alumni
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>Alumni List</span>
          <button className="btn btn-success" id="importCSVBtn">
            <i className="fas fa-file-csv"></i> Import CSV
          </button>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Graduation Year</th>
                <th>Degree</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Employment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="alumniTableBody">
              {alumniData.map((alumni) => (
                <tr key={alumni.id}>
                  <td>{alumni.name}</td>
                  <td>{alumni.graduationYear}</td>
                  <td>{alumni.degree}</td>
                  <td>{alumni.email}</td>
                  <td>{alumni.phone}</td>
                  <td>{alumni.employment}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AlumniModal addAlumni={addAlumni} />
    </div>
  );
}

export default AlumniList;
