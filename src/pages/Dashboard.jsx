import React from 'react'
import Sidebar from "../components/Dashboard/Sidebar"
import Main from "../components/Dashboard/Main";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
    <Sidebar />
    <Main />
  </div>
  )
}
