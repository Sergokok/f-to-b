import React from 'react';
import {Redirect, Route} from 'react-router-dom';


export default function ProtectedRoute({component: Component, ...props}) {
    return (
        <Route>
            {
                () => (props.loggedIn === true) ? <Component {...props} /> : <Redirect to='/'/>
            }
        </Route>
    )
}
// const ProtectedRoute = ({ component: Component, loggedIn, ...props }) => {
//     return (
//         <Route>
//             {loggedIn ? <Component {...props} /> : <Redirect to="/" />}
//         </Route>
//     );
// }

// export default ProtectedRoute;
