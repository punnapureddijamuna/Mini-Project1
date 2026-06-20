import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("signup");

  const [student, setStudent] = useState({
    name: "",
    roll: "",
    course: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful");
    setPage("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      login.email === student.email &&
      login.password === student.password
    ) {
      setPage("dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="box">
        {page === "signup" && (
          <>
            <h1>Student Signup</h1>

            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Enter Name"
                required
                onChange={(e) =>
                  setStudent({ ...student, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Enter Roll Number"
                required
                onChange={(e) =>
                  setStudent({ ...student, roll: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Enter Course"
                required
                onChange={(e) =>
                  setStudent({ ...student, course: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) =>
                  setStudent({ ...student, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) =>
                  setStudent({ ...student, password: e.target.value })
                }
              />

              <button type="submit">Signup</button>
            </form>

            <p>
              Already have account?{" "}
              <span onClick={() => setPage("login")}>
                Login
              </span>
            </p>
          </>
        )}

        {page === "login" && (
          <>
            <h1>Student Login</h1>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) =>
                  setLogin({ ...login, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />

              <button type="submit">Login</button>
            </form>

            <p>
              Don't have account?{" "}
              <span onClick={() => setPage("signup")}>
                Signup
              </span>
            </p>
          </>
        )}

        {page === "dashboard" && (
          <>
            <h1>Student Dashboard</h1>

            <h2>Welcome {student.name}</h2>

            <p>
              <strong>Roll No:</strong> {student.roll}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>

            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <button onClick={() => setPage("login")}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;