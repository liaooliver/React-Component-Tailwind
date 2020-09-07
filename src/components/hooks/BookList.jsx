import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';


// class BookList extends Component {

//     // Class.contextType      only class component
//     static contextType = ThemeContext
//     render() { 

//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;

//         return ( 
//             <div className="p-6 transition-all duration-700" style={{ color:theme.syntax, backgroundColor: theme.bg }}>
//                 <ul>
//                     <li className="mb-4 p-3 rounded-lg" style={{ backgroundColor: theme.ui }}>The way of kings</li>
//                     <li className="mb-4 p-3 rounded-lg" style={{ backgroundColor: theme.ui }}>The name of the wind</li>
//                     <li className="p-3 rounded-lg" style={{ backgroundColor: theme.ui }}>The final of empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }

const BookList = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <div className="p-6 transition-all duration-700" style={{ color:theme.syntax, backgroundColor: theme.bg }}>
            <ul>
                <li className="mb-4 p-3 rounded-lg" style={{ backgroundColor: theme.ui }}>The way of kings</li>
                <li className="mb-4 p-3 rounded-lg" style={{ backgroundColor: theme.ui }}>The name of the wind</li>
                <li className="p-3 rounded-lg" style={{ backgroundColor: theme.ui }}>The final of empire</li>
            </ul>
        </div>
    );
}
 
export default BookList;