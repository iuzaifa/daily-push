import React from 'react'
import Sidebar from '../components/common/Sidebar'
import Header from '../components/common/Header'
// import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* 280px it should be  */}
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <main style={{ padding: "16px", background: "#F7F8FA", flex: 1 }}>
            {/* <Outlet/> */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quisquam magnam esse ipsum nihil architecto amet id unde, animi minus quia, facilis excepturi tenetur nisi voluptatum repellat, pariatur aspernatur corporis.
          </main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout