import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class NavBar extends Component {
    render() {
        // Context.Consumer
        return ( 
            <ThemeContext.Consumer>
                {
                    (context) => {
                        const { isLightTheme, light, dark } = context;
                        const theme = isLightTheme ? light : dark;
                        return <nav className="p-2 transition-all duration-700" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li className="inline-block m-3 rounded-md p-3">Home</li>
                            <li className="inline-block m-3 rounded-md p-3">About</li>
                            <li className="inline-block m-3 rounded-md p-3">Contact</li>
                        </ul>
                    </nav>
                    }
                }
            </ThemeContext.Consumer>
         );
    }
}
 
export default NavBar;