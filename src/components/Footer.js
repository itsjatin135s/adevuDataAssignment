import React from 'react'

export default function Footer() {
    return (
        <div style={{background:"#1B1B1B", height:220, marginTop:40, color: "white"}}>
            <div> dropdown here</div>
            <div style={{display:'flex', marginTop:40}}>
                <a className='FooterA' href="/">System Status</a>
                <a className='FooterA' href="/">Blog</a>
                <a className='FooterA' href="/">FAQ</a>
                <a className='FooterA' href="/">About</a>
                <a className='FooterA' href="/">Tableau Products</a>
                <a className='FooterA' href="/">Careers</a>
                <a className='FooterA' href="/">Contact Us</a>
            
            </div>
            <div style={{display:'flex',justifyContent:'space-between' ,fontSize:10, marginTop:40}}>
                <div>
                    <a className='FooterA' href="/">LEGAL</a>
                    <a className='FooterA' href="/">PRIVACY</a>
                    <a className='FooterA' href="/">DATA POLICY</a>
                    <a className='FooterA' href="/">UNINSTALL</a>
                    <a className='FooterA' href="/">COOKIE PREFERENCES</a>
                </div>
                <div style={{marginRight:10}}>
                    2023 TABLEAU SOFTWARE, LLC. A SALEFORECE COMPANY. ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
    )
}
