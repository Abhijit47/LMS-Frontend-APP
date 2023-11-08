import React, { useEffect } from "react";
import { decodeToken } from "react-jwt";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
const Admin = () => {
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (isEmpty(token) && isEmpty(decodeToken(token))) return;
  }, [token]);

  return (
    <>
      {decodeToken(token)?.role.includes("admin", "moderator") ? (
        <Outlet />
      ) : (
        <div>
          {toast.error("You have not permission to view", { autoClose: 1250 })}
          <Navigate to={"/"} replace={true} />
        </div>
      )}
      {/* <Outlet /> */}
    </>
  );
};

export default Admin;
