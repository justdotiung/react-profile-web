import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout__container">
      <Suspense fallback={"loading"}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
