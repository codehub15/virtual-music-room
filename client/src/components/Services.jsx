import React from 'react'
import { Link } from 'react-router-dom'


export default function Services() {
    return (
        <div className="service-container">
            <h2 className="heading">Services</h2>
            <p> We provide different services to help unknown artists everywhere.</p>

            <div className="service-offer">
                <div className="services">
                    <p>Technical support to help you upload your tracks in the better way possible.</p>
                    <Link to="/support"><i class="fas fa-headset"></i> Support</Link>
                </div>

                <div className="services">
                    <p>Free templates to help you display your material in a professional way.</p>
                    <a href="https://musician-portfolio.netlify.app/" target="_blank" className="link-portfolio">
                        <i class="far fa-id-card"></i>
                        Musician Portfolio Template
                    </a>
                </div>
            </div>
        </div>
    )
}
