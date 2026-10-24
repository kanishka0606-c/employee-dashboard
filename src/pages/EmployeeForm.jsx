import { useState } from "react";

const initialState = { name: "", designation: "", location: "", salary: "" };

function EmployeeForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee data:", form); // no posting required
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="col-md-6">
      <h2 className="mb-3">Employee Form</h2>
      {submitted && (
        <div className="alert alert-success">Form submitted successfully!</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control"
            value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" name="designation" className="form-control"
            value={form.designation} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" name="location" className="form-control"
            value={form.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" name="salary" className="form-control"
            value={form.salary} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;