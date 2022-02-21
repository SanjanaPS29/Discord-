import "./App.css";
import Header from "./layouts/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { dashboardRoutes, routes } from "./routes/Routes";
import Footer from "./layouts/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home/Home";
import {useAuth} from './hooks/ProvideAuth';
import {UnauthenticatedRoutes,AuthenticatedRoutes} from './routes/Routes';


 export default function App() {

const {loggedIn} = useAuth();

console.log(`loggedIn  ${loggedIn}`)
  return loggedIn?<AuthenticatedRoutes/>:<UnauthenticatedRoutes/>;
 }
 //(
    // <Router>
    //     <div className="App">
    //       <Routes>
    //         <Route path="/" >
    //           {
    //             routes?.map(({ path, element }) => (
    //               <Route key={path} exact path={path} element={element} />
    //             ))
    //             // <Route  key={path}  path="/dashboard" element={<Dashboard />} />
    //           }
    //         </Route>
    //         <Route path="/dashboard" >
    //           {dashboardRoutes?.map(({ path, element }) => (
    //             <Route key={path} exact path={path} element={element} />
    //           ))}
    //         </Route>
    //       </Routes>
    //     </div>
 
    // </Router>
  //);
 // )
//}

//export default App;

// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/dashboard"/>
//   ) : (
//     <PublicHomePage/>
//   )
