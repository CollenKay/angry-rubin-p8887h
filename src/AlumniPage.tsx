import React from "react";

function AlumniPage() {
  return (
    <div className="main-content">
      <h1 className="mb-4">Alumni Management</h1>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search Alumni..."
            />
          </div>
          <div className="col-md-6 text-right">
            <button className="btn btn-primary">Add Alumni</button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Graduation Year</th>
                <th>Major</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>2010</td>
                <td>Computer Science</td>
                <td>johndoe@example.com</td>
                <td>
                  <button className="btn btn-sm btn-info mr-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>2012</td>
                <td>Business Administration</td>
                <td>janesmith@example.com</td>
                <td>
                  <button className="btn btn-sm btn-info mr-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              {/* More rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlumniPage;
