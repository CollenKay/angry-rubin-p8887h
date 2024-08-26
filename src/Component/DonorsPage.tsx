import React from "react";

function DonorsPage() {
  return (
    <div className="main-content">
      <h1 className="mb-4">Donor Management</h1>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5>Donor List</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Donation Amount</th>
                      <th>Date of Donation</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>johndoe@example.com</td>
                      <td>$1000</td>
                      <td>2024-08-20</td>
                      <td>Confirmed</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Add New Donor</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="donorName" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="donorName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="donorEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="donorEmail"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="donationAmount" className="form-label">
                    Donation Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="donationAmount"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Donor
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Import Donors</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="donorFile" className="form-label">
                    Upload CSV File
                  </label>
                  <input type="file" className="form-control" id="donorFile" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Import Donors
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorsPage;
