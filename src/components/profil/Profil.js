import "./profil.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const HelpForDev = () => (
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                            alt=""
                        />
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file" />
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <input
                        type="submit"
                        class="profile-edit-btn"
                        name="btnAddMore"
                        value="Edit Profile"
                    />
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                        <h5>Kshiti Ghelani</h5>
                        <h6>Professional Event planner</h6>
                        <p class="proile-rating">
                            RANKINGS : <span>8/10</span>
                        </p>

                        <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                        >
                            <Tab eventKey="home" title="Home">
                                <div
                                    class="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Event Planner</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="mywork" title="My work">
                                <div
                                    class="tab-pane fade show active"
                                    id="mywork"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                ></div>
                            </Tab>
                            <Tab eventKey="myrequests" title="My requests">
                                <div
                                    class="tab-pane fade show active"
                                    id="myrequests"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                ></div>
                                <h1> my requests testing</h1>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Website Link</a>
                        <br />

                        <p>SKILLS</p>
                        <a href="">Weddings planning</a>
                        <br />
                        <a href="">Private partys</a>
                        <br />
                        <a href="">Product launching</a>
                        <br />
                        <a href="">Anniversaries</a>
                        <br />
                        <a href="">seminars</a>
                        <br />
                    </div>
                </div>
            </div>
        </form>
    </div>
);
export default HelpForDev;
