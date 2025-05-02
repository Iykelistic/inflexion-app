import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import TablesMain from '../components/Tables/TablesMain'

export default function Tables() {
  return (
    <div className="dashboard__container">
        <Sidebar />
        <TablesMain />
    </div>
  )
}
