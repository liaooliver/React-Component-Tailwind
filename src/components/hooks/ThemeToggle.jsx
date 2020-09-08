import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

// class ThemeToggle extends Component {

//     static contextType = ThemeContext
    
//     render() { 
//         const { toggleTheme, isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return ( 
//             <button className="p-3 mt-3" onClick={toggleTheme} style={{ color:theme.syntax, backgroundColor: theme.ui }}>Toggle the theme</button>
//         );
//     }
// }

const ThemeToggle = () => {
    const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <button className="p-3 mt-3" onClick={toggleTheme} style={{ color:theme.syntax, backgroundColor: theme.ui }}>Toggle the theme</button>
    );
}
 
export default ThemeToggle;