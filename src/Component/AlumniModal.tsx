import React, { useState } from "react";

// Define the Alumni interface
interface Alumni {
  id: number;
  name: string;
  graduationYear: string;
  degree: string;
  email: string;
  phone: string;
  employment: string;
}
// Define the type for the addAlumni function
type AddAlumniFunction = (alumni: Alumni) => void;

interface AlumniModalProps {
  addAlumni: AddAlumniFunction;
}

function AlumniModal({ addAlumni }: AlumniModalProps) {
  const [alumni, setAlumni] = useState<Alumni>({
    id: 0,
    name: "",
    graduationYear: "",
    degree: "",
    email: "",
    phone: "",
    employment: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setAlumni({ ...alumni, [name]: value });
  };

  const handleSubmit = () => {
    addAlumni({ ...alumni, id: Date.now() });
    // Reset the form after submission
    setAlumni({
      id: 0,
      name: "",
      graduationYear: "",
      degree: "",
      email: "",
      phone: "",
      employment: "",
    });
  };

  return (
    <div
      className="modal fade"
      id="addAlumniModal"
      tabIndex={-1} // Change from "-1" to -1
      aria-labelledby="addAlumniModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addAlumniModalLabel">
              Add New Alumni
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="addAlumniForm">
              <div className="mb-3">
                <label htmlFor="alumniName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alumniName"
                  name="name"
                  value={alumni.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="graduationYear" className="form-label">
                  Graduation Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="graduationYear"
                  name="graduationYear"
                  value={alumni.graduationYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="degree"
                  name="degree"
                  value={alumni.degree}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={alumni.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={alumni.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="employment" className="form-label">
                  Employment
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employment"
                  name="employment"
                  value={alumni.employment}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniModal;
