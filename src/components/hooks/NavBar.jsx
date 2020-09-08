import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';

// class NavBar extends Component {
//     render() {
//         // Context.Consumer
//         return (
//             <AuthContext.Consumer>
//                 {(authContext) => (
//                     <ThemeContext.Consumer>
//                         {(context) => {
//                             const { isAuthenticated, toggleAuth } = authContext
//                             const { isLightTheme, light, dark } = context;
//                             const theme = isLightTheme ? light : dark;
//                             return <nav className="p-2 transition-all duration-700" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
//                                 <h1>Context App</h1>
//                                 <div className="mt-3" onClick={toggleAuth}>
//                                     {isAuthenticated ? 'Logged in' : 'Logged out'}
//                                 </div>
//                                 <ul>
//                                     <li className="inline-block m-3 rounded-md p-3">Home</li>
//                                     <li className="inline-block m-3 rounded-md p-3">About</li>
//                                     <li className="inline-block m-3 rounded-md p-3">Contact</li>
//                                 </ul>
//                             </nav>
//                         }}
//                     </ThemeContext.Consumer>
//                 )}
//             </AuthContext.Consumer>
//         );
//     }
// }

const NavBar = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)

    const theme = isLightTheme ? light : dark;

    return (
        <nav className="p-2 transition-all duration-700" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div className="mt-3" onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li className="inline-block m-3 rounded-md p-3">Home</li>
                <li className="inline-block m-3 rounded-md p-3">About</li>
                <li className="inline-block m-3 rounded-md p-3">Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;