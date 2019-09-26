import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div style={copyrightStyle}><p>Powered By Marvel API</p></div>
                <div className="footer-columns" style={columns}>
                    <ul>
           <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>

                    </ul>
                    <ul>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                 
                    </ul>
                    <ul>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                    
                    </ul>
                    <ul>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                        <li><Link to="/">Useful Link</Link></li>
                      
                    </ul>
                    {/*LANGUAGE BUTTON*/}




                </div>
            </footer>


        );


    }

}

export default Footer;


const copyrightStyle = {
    padding: '.25rem',
    textAlign: 'center'
}

const columns = {
    display: 'flex'
}

