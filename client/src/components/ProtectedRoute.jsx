import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }

  // ❌ If not → redirect
  return <Navigate to="/" />;
}

export default ProtectedRoute;