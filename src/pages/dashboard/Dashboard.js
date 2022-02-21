import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AsideConversation from './Layouts/dashboard-AsideLeft/asideConversation/AsideConversation';
import AsideNavbar from './Layouts/dashboard-AsideLeft/asideNavbar/AsideNavbar';
import ActiveNow from './Layouts/dashboard-AsideRight/activeNow/ActiveNow';
import Header from './Layouts/dashboard-Header/Header';
import {DashboardStyle,MainContainer,MainContent} from './dashboard.style'
import DashboardHome from './pages/DashboardHome/DashboardHome';
import  NooneAround from '../../assets/image-dashboard/noonearound.PNG'
import { dashboardRoutes } from '../../routes/Routes';

 function Dashboard() {
  return (
    (
 
    <DashboardStyle>
      <AsideNavbar/>
      <AsideConversation/>
      <MainContainer>
      <Header/>
      <MainContent>
      {/* <Routes>
{
  dashboardRoutes?.map(({path,element})=>(
    <Route key={path} exact path={path} element={element} />
  ))
}
 </Routes>  */}

        {/* <DashboardHome/> */}
        <ActiveNow/>
      </MainContent>
        </MainContainer> 
    </DashboardStyle>
    )
  );
}


export default Dashboard;