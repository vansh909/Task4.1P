import React from 'react';
import './Header.css';
class Header extends React.Component {
    state = {  } 
    render() { 
        return (
            <header>
            <nav className="navbar">
              <ul>
                <li><a className=' Deakin'href="#">DevDeakin</a></li>
                <li><a className='post' href="#">Post</a></li>
                <li><a className='Login' href="#">Login</a></li>
                <div className="search">
                  <input type="text" name="search" id="search" placeholder="Happy Searching" />
                </div>
              </ul>
            </nav>
          </header>
            
        );
    }
}
export default Header;