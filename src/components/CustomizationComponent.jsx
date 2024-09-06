import React, { useState } from 'react';
import '../styles/CustomizationComponent.css';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
const CustomizationComponent = () => {
    const [accentColor, setAccentColor] = useState('#FF9898');
    const [textColor, setTextColor] = useState('#571010');
    const [backgroundColor, setBackgroundColor] = useState('#FFEAEE');
    const [htmlLink, setHtmlLink] = useState('');

    return (
        <div className="customization-container">
            <h1 className="customization-heading">Discover the Heart of Our Functionality</h1>

            <div className="customization-grid">
                {/* Color Customization */}
                <div className="customization-section color-customization">
                    <h2>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h2>
                    <p>Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
                    <div className="form-group">
                        <label>Accent Color</label>
                        <div className="input-group">
                            <input
                                type="text"
                                value={accentColor}
                                onChange={(e) => setAccentColor(e.target.value)}
                            />
                            <div className="color-preview" style={{ backgroundColor: accentColor }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Text Color</label>
                        <div className="input-group">
                            <input
                                type="text"
                                value={textColor}
                                onChange={(e) => setTextColor(e.target.value)}
                            />
                            <div className="color-preview" style={{ backgroundColor: textColor }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Background Color</label>
                        <div className="input-group">
                            <input
                                type="text"
                                value={backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                            />
                            <div className="color-preview" style={{ backgroundColor: backgroundColor }}></div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="preview-button">Preview</button>
                        <button className="apply-button">Apply Colors</button>
                    </div>
                </div>

                {/* Onboarding Support */}
                <div className="customization-section">
                    <h2>Exclusive Onboarding Support for High-Volume Brands</h2>
                    <p>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
                    <button className="cta-button">Scheduled A Call</button>
                </div>

                {/* Integrations */}
                <div className="customization-section">
                    <h2>Explore Our Integrated Ecosystem</h2>
                    <p>Discover a variety of popular integrations tailored for your convenience.</p>
                    <div className="integrations">
                        <img src={img1} alt="Integration 1" />
                        <img src={img2} alt="Integration 2" />
                        <img src={img3} alt="Integration 3" />
                        <img src={img4} alt="Integration 4" />
                        <img src={img5} alt="Integration 5" />
                    </div>
                    <button className="cta-button">Explore Integration</button>
                </div>

                {/* HTML Customization */}
                <div className="customization-section">
                    <h2>Seamlessly Integrate Custom HTML Elements</h2>
                    <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content.</p>
                    <label>HTML Link</label>
                    <textarea
                        value={htmlLink}
                        onChange={(e) => setHtmlLink(e.target.value)}
                        placeholder="Value"
                    />
                    <div className="buttons">
                        <button className="preview-button">Preview</button>
                        <button className="apply-button">Apply Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizationComponent;
