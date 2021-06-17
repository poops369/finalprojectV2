import React from "react";
import "./HomePage.css";
function HomePage() {
    return (
        <div>
            <div>
                <img
                    className="Homepage-img"
                    src="https://infinityhospitalitygroup.com/wp-content/uploads/2020/05/IH_Home-page_9.jpg"
                    alt="new"
                />
            </div>
            <div>
                <h2 className="title">EVENT PLANNING & DESIGN</h2>
            </div>
            <div className="inner-text">
                <p className="p1">
                    "The Infinity experience is unlike any other. Our
                    full-service event planning and design team will guide you
                    every step of the way, ensuring a stress-free experience
                    from start to finish."
                </p>
                <p className="p1">
                    "With us, customization is guaranteed. From the very
                    beginning, we will create a custom proposal tailored to your
                    specific wants and needs. You'll be paired with an Infinity
                    Event Team who will collaborate with you to bring your
                    vision to life. We will team up with some of the best
                    vendors in Nashville and take care of the all the details
                    like meeting scheduling, delivery dates, payments, day-of
                    setup, and more."
                </p>
                <p className="p1">
                    "When it’s showtime, our staff will work tirelessly to
                    guarantee your event is effortless and unforgettable."
                </p>
            </div>
            <div className="Bubbles">
                <div>
                    <h5 className="special-title1">WEDDINGS</h5>
                    <img
                        className="wedding"
                        src="https://infinityhospitalitygroup.com/wp-content/uploads/2019/07/Jenna-Ben_Bell-Tower-Wedding_11-300x300.jpg"
                        alt="wedding-photo"
                    />
                </div>
                <div>
                    <h5 className="special-title1">SOCIAL GATHERINGS</h5>
                    <img
                        className="social"
                        src="https://infinityhospitalitygroup.com/wp-content/uploads/2018/11/Hudson-Group_Bridge-Building_1-51-300x300.jpg"
                        alt="SOCIAL-GATHERINGS"
                    />
                </div>
                <div>
                    <h5 className="special-title1">CORPORATE EVENTS</h5>
                    <img
                        className="CORPORATE"
                        src="https://infinityhospitalitygroup.com/wp-content/uploads/2019/07/Arconic-Awards_Bridge-Building_12-300x300.jpg"
                        alt="CORPORATE EVENTS"
                    />
                </div>
            </div>
        </div>
    );
}
export default HomePage;
