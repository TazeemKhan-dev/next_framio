import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth bg-black">
      <div>{children}</div>
    </main>
  );
};

export default Layout;
