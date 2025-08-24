import React,{useState} from 'react'

function RegistrationForm() {
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form Submitted Successfully:", formData);
      alert("Registration Successful!");
      setFormData({ username: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md w-80 mx-auto shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <div className="mb-3">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      <div className="mb-3">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-3">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}


export default RegistrationForm
