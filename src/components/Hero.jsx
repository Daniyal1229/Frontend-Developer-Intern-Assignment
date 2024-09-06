import React from 'react'
import '../styles/Hero.css'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1 className="welcome-message">Welcome, John Mathew!!</h1>
            <div className="card-container">
                <div className="card" id='card1'>
                    <h2>Order Sync Successful!</h2>
                    <p>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
                    <button className="primary-button">Explore Your Orders</button>
                </div>
                <div className="card" id='card2'>
                    <h2>Customize Customer Notification</h2>
                    <p>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                    <button className="primary-button">Configure Notification</button>
                </div>
                <div className="card" id='card3'>
                    <h2>Your Tracking Link has been generated</h2>
                    <p>Include the Link to Your Store's Navigation Menu.</p>
                    <div className="button-group">
                        <button className="secondary-button">Copy Link</button>
                        <button className="primary-button">Go to Navigation Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection