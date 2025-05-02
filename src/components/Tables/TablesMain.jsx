import React from 'react';
import Header from '../Dashboard/Header';
import FirstTable from './FirstTable';
import SecondTable from './SecondTable';
import DashboardFooter from '../Dashboard/DashboardFooter';

export default function 
() {
  return (
    <div className="main__container maintable__container">
        <Header pageTitle="Tables" />
        <FirstTable />
        <SecondTable />
        <DashboardFooter />
    </div>
  )
}
