import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    console.log("TOKEN:", token);
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
          return;
        }
        const res = await API.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);

      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/");
      
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>

      {user ? (
        <>
          <p>Welcome, {user.name}</p>

          {/* ✅ Logout button (optional but useful) */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;