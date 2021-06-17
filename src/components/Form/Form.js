import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput,
} from "mdbreact";

const FormPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Write to us</p>
                        <div className="grey-text">
                            <MDBInput
                                label="Type Of Event"
                                icon="bars"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Location"
                                icon="map-marker-alt"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Phone Number"
                                icon="phone"
                                group
                                type="Number"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Date"
                                icon="calendar-alt"
                                group
                                type="Date"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                type="textarea"
                                rows="2"
                                label="Description"
                                icon="pencil-alt"
                            />
                        </div>
                        <div className="text-center">
                            <button outline color="secondary">
                                Send
                                <MDBIcon
                                    far
                                    icon="paper-plane"
                                    className="ml-1"
                                />
                            </button>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;
