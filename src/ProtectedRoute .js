import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyTokenByAPI } from "./utils/auth";


const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const valid = await verifyTokenByAPI();
      setIsValid(valid);
    };
    checkToken();
  }, []);

  // 🔄 Show loader instead of blank screen
  if (isValid === null) {
    return <div style={{ textAlign: "center", marginTop: "40vh" }}>
      Checking authentication...
    </div>;
  }

  // ❌ Token invalid
  if (!isValid) {
    // localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }

  // ✅ Token valid
  return children;
};

export default ProtectedRoute;
