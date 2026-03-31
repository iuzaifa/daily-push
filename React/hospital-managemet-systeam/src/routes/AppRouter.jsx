import React from 'react'
import { Routes, Route } from "react-router-dom";
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import ProtectedRoute from "./ProtectedRoute"
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../pages/Dashboard'
import RoleRoute from './RoleRoute'
const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route element={AuthLayout}>
          <Route path="/login" element={<Login />}></Route>
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          {/* <Route path="patients" element={<Patients />} /> */}
          {/* <Route path="billing" element={<Billing />} /> */}
          {/* <Route path="appointments" element={<Appointments />} /> */}

          {/* Example of role-based access */}
          <Route
            path="admin"
            element={
              <RoleRoute roles={["admin"]}>
                <Dashboard />
              </RoleRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter