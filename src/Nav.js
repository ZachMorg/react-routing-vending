import React from 'react';
import {Link} from 'react-router-dom';


const Nav = function(){
    return(
        <nav>
            <Link to='/snack/chips'>
                Chips
            </Link>
            <br/>
            <Link to='/snack/chocolate'>
                Chocolate
            </Link>
            <br/>
            <Link to='/snack/soda'>
                Soda
            </Link>
        </nav>
    );
}

export default Nav