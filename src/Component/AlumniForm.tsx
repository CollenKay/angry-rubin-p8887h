import React, { useState } from "react";

// Define the Alumni interface
interface Alumni {
  firstName: string;
  lastName: string;
  graduationYear: string;
  degree: string;
  email: string;
  phone: string;
  employment: string;
}

// Define the type for the onSubmit function
type OnSubmitFunction = (alumni: Alumni) => void;

interface AlumniFormProps {
  onSubmit: OnSubmitFunction;
  initialData?: Partial<Alumni>;
}

function AlumniForm({ onSubmit, initialData = {} }: AlumniFormProps) {
  const [alumni, setAlumni] = useState<Alumni>({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    graduationYear: initialData.graduationYear || "",
    degree: initialData.degree || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    employment: initialData.employment || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAlumni((prevAlumni) => ({
      ...prevAlumni,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(alumni);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={alumni.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={alumni.lastName}
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
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default AlumniForm;
