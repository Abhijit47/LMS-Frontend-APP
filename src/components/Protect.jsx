import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { isExpired } from "react-jwt";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    if (isEmpty(token)) {
      return setAuth(false);
    } else if (!isEmpty(token) && isExpired(token)) {
      return setAuth(false);
    } else {
      return setAuth(true);
    }
  }, [token]);

  return (
    <>
      {auth ? <Outlet /> : <Navigate to="/login" replace={true} />}
      {/* <Outlet /> */}
    </>
  );
};

export default Protect;
