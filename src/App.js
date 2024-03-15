// import React, { Component,createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Child from "./components/Child";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("App constructor calling");
//   }
//   render() {
//     return (
//       <>
//         <Router>
//           <div>
//             <h2>Accounts</h2>

//             <ul>
//               <li>
//                 <Link to="/netflix">Netflix</Link>
//               </li>
//               <li>
//                 <Link to="/zillow-group">Zillow Group</Link>
//               </li>
//               <li>
//                 <Link to="/yahoo">Yahoo</Link>
//               </li>
//               <li>
//                 <Link to="/modus-create">Modus Create</Link>
//               </li>
//             </ul>

//             <Switch>
//               <Route path="/:id" children={<Child />} />
//             </Switch>
//           </div>
//         </Router>
//       </>
//     );
//   }
// }


import React, { Component } from 'react'
import ProvideAuth from "./components/ProvideAuth"
import AuthButton from "./components/AuthButton"
import PrivateRoute from "./components/PrivateRoute"
import PublicPage from "./components/PublicPage"
import ProtectedPage from "./components/ProtectedPage"
import LoginPage from "./components/LoginPage"
export default class App extends Component {
  render() {
    return (
      <>
        <ProvideAuth>
        <Router>
          <div>
            <AuthButton />

            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/public">
                <PublicPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
      </>
    )
  }
}
