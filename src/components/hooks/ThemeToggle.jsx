import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class ThemeToggle extends Component {

    static contextType = ThemeContext
    
    render() { 
        const { toggleTheme, isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <button className="p-3" onClick={toggleTheme} style={{ backgroundColor: theme.ui }}>Toggle the theme</button>
        );
    }
}
 
export default ThemeToggle;