import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AddFriend from "../pages/dashboard/pages/addFriend/AddFriend";
import DashboardHome from "../pages/dashboard/pages/DashboardHome/DashboardHome";
import AsideNavbar from "../pages/dashboard/Layouts/dashboard-AsideLeft/asideNavbar/AsideNavbar";
import AsideConversation from "../pages/dashboard/Layouts/dashboard-AsideLeft/asideConversation/AsideConversation";
import Header  from "../pages/dashboard/Layouts/dashboard-Header/Header";
import ActiveNow from "../pages/dashboard/Layouts/dashboard-AsideRight/activeNow/ActiveNow";
import {DashboardStyle,MainContainer,MainContent,MainContent1,MainContent2} from '../pages/dashboard/dashboard.style';
import Pending from "../pages/dashboard/pages/pending/Pending";
import Friends from "../pages/dashboard/pages/friends/Friends";
import Message from "../pages/dashboard/pages/message/Message";
import BlockFriend from '../pages/dashboard/pages/blockFriend/BlockFriend';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect,
    Link,
    Navigate
  } from "react-router-dom";


export const UnauthenticatedRoutes=() =>{
    return(
     <Router>  

         
             {/* <Link to='/login'>Login</Link> */}
             <Routes>
                {
                routes?.map(({ path, element }) => (
                  <Route key={path} exact path={path} element={element} />
                ))
                // <Route  key={path}  path="/dashboard" element={<Dashboard />} />
               }

              </Routes>
     </Router>

    )
}

export const AuthenticatedRoutes=()=>{

    return (

        <Router>
       
    <DashboardStyle>
      <AsideNavbar/>
      <AsideConversation/>
      <MainContainer>
      <Header/>
      <MainContent>
          <MainContent1>
<Routes>
              {
               
              dashboardRoutes?.map(({ path, element }) => (
                <Route key={path} exact path={path} element={element} />
              ))}
                <Route path="/login" element={<Navigate replace to="/dashboard" />} />

              </Routes>
              </MainContent1>
              <MainContent2>
     <ActiveNow/>
     </MainContent2>
      </MainContent>
        </MainContainer>
    </DashboardStyle>

        </Router>
    )
}


export const routes=
[
{
path:'/',
element:<Home/>
},
{
path:'/login',
element:<Login/>
},
{
    path:'/register',
    element:<Register/>
},

]

export const dashboardRoutes=[
    // {
    //     path:'/dashboard',
    //     element:<Dashboard/>
    // },
    {
        path:'/dashboard',
        element:<DashboardHome/>
    },
    {
        path:'/blockFriend',
        element:<BlockFriend/>
    },
    {
        path:'/friends',
        element:<Friends/>
    },
    {
        path:'/message',
        element:<Message/>
    },
    {
        path:'/message/:friendId/:friendName',
        element:<Message/>
    },

    {
        path:'/pending',
        element:<Pending/>
    },
    {
        path:'/addFriend',
        element:<AddFriend/>
    },
]