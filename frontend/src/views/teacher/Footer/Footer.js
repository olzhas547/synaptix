import React from 'react';

function Footer() {
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem 100px',
            width:'100%',
        }}>

            <div className="footer_a" style={{width:'600px', display:'flex', justifyContent:'space-between'}}>
                <a href="/about" style={{ textDecoration: 'none'}}>About</a>
                <a href="/careers" style={{ textDecoration: 'none'}}>Careers</a>
                <a href="/blog" style={{ textDecoration: 'none'}}>Blog</a>
                <a href="/terms" style={{ textDecoration: 'none'}}>Terms & Conditions</a>
            </div>

            <span style={{textAlign:"left"}}>© 2024 Synaptix</span>
        </footer>
    )
        ;
}

export default Footer;