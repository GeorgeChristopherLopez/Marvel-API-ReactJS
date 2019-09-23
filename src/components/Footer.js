import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div style={copyrightStyle}><p>Powered By Marvel API</p></div>
                <div className="footer-columns" style={columns}>
                    <ul>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Investor Relations</Link></li>

                        <li><Link>Ways to Watch</Link></li>
                        <li><Link>Corporate Information</Link></li>
                        <li><Link>Marvel History</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Help Center</Link></li>
                        <li><Link>Jobs</Link></li>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Account</Link></li>
                        <li><Link>Redeem Gift Cards</Link></li>
                        <li><Link>Privacy</Link></li>
                        <li><Link>Speed Test</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Media Center</Link></li>
                        <li><Link>Buy Gift Cards</Link></li>
                        <li><Link>Cookie Preferences</Link></li>
                        <li><Link>Legal Notice</Link></li>
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
    'text-align': 'center'
}

const columns = {
    display: 'flex'
}

