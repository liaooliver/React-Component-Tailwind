import React, { Component } from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div>
                <ul>
                    <li className="mb-4">The way of kings</li>
                    <li className="mb-4">The name of the wind</li>
                    <li className="mb-4">The final of empire</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;