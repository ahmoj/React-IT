/* eslint-disable react/prop-types */
import Auth from "../../pages/Auth/Auth";

function ProtectedRoute({ children }) {
  const localLoggedInUser = localStorage.getItem("loggedInUser");
  if (localLoggedInUser) {
    return children;
  }
  return <Auth />;
}

export default ProtectedRoute;