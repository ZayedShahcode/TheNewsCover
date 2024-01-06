import React from "react"
import './nav.css'

export default function Navbar(){
    return(
    <>
        <header>
        <h1 className="title">The News Cover</h1>
            <nav>
                <a href="/" className="urltoWeb"><div className="navitem">Home</div></a>
                <a href="/" className="urltoWeb"><div className="navitem">About</div></a>
                <a href="/" className="urltoWeb"><div className="navitem">Contact</div></a>
            </nav>
        </header>
    </>
)}