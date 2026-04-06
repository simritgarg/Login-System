import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      console.log(res.data); // debug

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">

    {/* Glass Card */}
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl w-[400px] p-8 text-white">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center">
        Welcome Back
      </h2>

      <p className="text-center text-sm text-gray-200 mt-2">
        Sign in to continue
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">

  <input
    type="email"
    placeholder="Enter your email"
    value={form.email}
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
    className="block w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-200 text-white outline-none focus:ring-2 focus:ring-white"
  />

  <input
    type="password"
    placeholder="Enter your password"
    value={form.password}
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
    className="block w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-200 text-white outline-none focus:ring-2 focus:ring-white"
  />

  <button
    type="submit"
    className="block w-full py-3 rounded-lg bg-white text-gray-900 font-semibold text-lg hover:scale-105 transition"
  >
    Continue →
  </button>

</form>

      {/* Footer */}
      <p className="text-sm text-center mt-6 text-gray-200">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="underline cursor-pointer"
        >
          Sign up
        </span>
      </p>

    </div>
  </div>
);
}

export default Login;