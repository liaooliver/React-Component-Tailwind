import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="p-2 mb-3">
                <h1>Context App</h1>
                <ul>
                    <li className="inline-block m-3 rounded-md p-3">Home</li>
                    <li className="inline-block m-3 rounded-md p-3">About</li>
                    <li className="inline-block m-3 rounded-md p-3">Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;