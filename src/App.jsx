import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="container">

            <h1>Controlled React Form</h1>

            <div className="form-card">

                <h2>User Registration</h2>

                <form>

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />

                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />

                    <label>Course</label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                    >
                        <option value="">Select Course</option>
                        <option value="MCA">MCA</option>
                        <option value="BCA">BCA</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Sc Computer Science">
                            M.Sc Computer Science
                        </option>
                    </select>

                </form>

            </div>

            <div className="output-card">

                <h2>Entered Data</h2>

                <p>
                    <strong>Name:</strong>{" "}
                    {formData.name || "Not entered"}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {formData.email || "Not entered"}
                </p>

                <p>
                    <strong>Phone:</strong>{" "}
                    {formData.phone || "Not entered"}
                </p>

                <p>
                    <strong>Course:</strong>{" "}
                    {formData.course || "Not selected"}
                </p>

            </div>

        </div>
    );
}

export default App;