import React from 'react'
import Header from './Header'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from "./ThirdSection";
import DashboardFooter from './DashboardFooter';

export default function Main() {
  return (
        <div className="main__container">
            <Header />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <DashboardFooter />
        </div>

  )
}
