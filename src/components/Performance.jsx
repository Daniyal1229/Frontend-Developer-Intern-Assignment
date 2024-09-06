import React from 'react';
import '../styles/Performance.css';

const Performance = () => {
    return (
        <div className="container">
            <h1 className="heading">Instant Dive into Your Performance Metrics</h1>

            <div className="time-line">
                {['Lifetime', 'Last Week', 'Last Month', 'Last Year', 'Customize Time Line'].map((period, index) => (
                    <button key={index} className="time-line-button">{period}</button>
                ))}
            </div>

            <div className="metrics-grid">
                {/* Shipment Updates */}
                <div className="metric-card">
                    <h2>Shipment Updates</h2>
                    <div className="shipment-buttons">
                        {['Delivered', 'Out for delivery', 'Intransit', 'Pending', 'Exception'].map((status, index) => (
                            <button key={index} className="shipment-button">{status}</button>
                        ))}
                    </div>
                    <div className="shipment-chart">
                        <svg viewBox="0 0 42 42" width="200" height="200" className="donut-chart">
                            {/* Background circle */}
                            <circle
                                cx="21" cy="21" r="15.915"
                                fill="transparent"
                                stroke="white"
                                strokeWidth="8"
                            />
                            {/* Segment 1 */}
                            <circle
                                cx="21" cy="21" r="15.915"
                                fill="transparent"
                                stroke="#946f00"  
                                strokeWidth="8"
                                strokeDasharray="20 90"
                                strokeDashoffset="0"
                            />
                            {/* Segment 2 */}
                            <circle
                                cx="21" cy="21" r="15.915"
                                fill="transparent"
                                stroke="#e6a700" 
                                strokeWidth="8"
                                strokeDasharray="12 90"
                                strokeDashoffset="-22"
                            />
                            {/* Segment 3 */}
                            <circle
                                cx="21" cy="21" r="15.915"
                                fill="transparent"
                                stroke="#fedba1" 
                                strokeWidth="8"
                                strokeDasharray="30 65"
                                strokeDashoffset="-36"
                            />
                            {/* Segment 4 */}
                            <circle
                                cx="21" cy="21" r="15.915"
                                fill="transparent"
                                stroke="#5c3b00" 
                                strokeWidth="8"
                                strokeDasharray="12 90"
                                strokeDashoffset="-68"
                            />
                            {/* Segment 5 */}
                            <circle
                                cx="21" cy="21" r="15.915"
                                fill="transparent"
                                stroke="#fadba1" 
                                strokeWidth="8"
                                strokeDasharray="17 90"
                                strokeDashoffset="-81"
                            />
                        </svg>
                    </div>
                    <div className="legend">
                        {[
                            { color: '#e6a700', label: 'Exception' },
                            { color: '#946f00', label: 'Intransit' },
                            { color: '#fec97e', label: 'Pending' },
                            { color: '#5c3b00', label: 'Delivered' },
                            { color: '#fedba1', label: 'Out for delivery' }
                        ].map((item, index) => (
                            <div key={index} className="legend-item">
                                <div className="legend-color" style={{ backgroundColor: item.color }} />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Star Facts */}
                <div className="metric-card">
                    <h2>Star Facts about your orders!</h2>
                    <p>There are 8 shipments that have been out for delivery for more than 3 days.</p>
                    <p>There are 5 shipments in exception right now.</p>
                    <p>The maximum chargebacks are from Miami.</p>
                    <button className="check-orders-button">Check Orders Page</button>
                </div>

                {/* Tracking Page Views Vs Orders */}
                <div className="metric-card">
                    <h2>Tracking Page Views Vs Orders</h2>
                    <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                    <div className="tracking-metrics">
    {[
        { 
            title: 'Orders', 
            value: 80, 
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>,
            color: '#FFF5E6' 
        },
        { 
            title: 'Tracking Page Views', 
            value: 44, 
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>,
            color: '#FFD700' 
        }
    ].map((metric, index) => (
        <div key={index} className="tracking-metric-card" style={{backgroundColor: metric.color}}>
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-content">
                <p className="metric-title">{metric.title}</p>
                <p className="metric-value">{metric.value}</p>
            </div>
        </div>
    ))}
</div>                </div>
            </div>

<style jsx>{`
    .tracking-metrics {
        display: flex
        justify-content: space-around
        gap: 20px
    }

    .tracking-metric-card {
        background-color: #fff
        border-radius: 8px
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
        padding: 20px
        display: flex
        align-items: center
        transition: transform 0.3s ease
    }

    .tracking-metric-card:hover {
        transform: translateY(-5px)
    }

    .metric-icon {
        margin-right: 15px
    }

    .metric-content {
        display: flex
        flex-direction: column
    }

    .metric-title {
        font-size: 14px
        color: #6d4c41
        margin: 0
    }

    .metric-value {
        font-size: 24px
        font-weight: bold
        color: #3f51b5
        margin: 5px 0 0
    }
`}</style>
        </div>
    );
};

export default Performance;