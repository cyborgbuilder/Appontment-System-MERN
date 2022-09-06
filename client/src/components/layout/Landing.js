import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import '../../App.css';

const Landing = ({isDoctorAuthenticated, isUserAuthenticated}) => {
    if(isDoctorAuthenticated){
        return <Redirect to="/dashboard" />
    } else if(isUserAuthenticated) {
        return <Redirect to="/appointment" />
    }

    return (
        <div>
             <Container>
                <Wrap>
                <div>
                            <h2 className=" item heading-sub"><strong>For Doctors</strong></h2>
                            <p className="item description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel itaque quae delectus veritatis consequatur hic!</p>
                            <Link to="/registerDoctor" type="button" className="item btn btn-info">Enter</Link>
                        </div>
                        <div className="user-signup">
                            <h2 className="item heading-sub"><strong>For Users</strong></h2>
                            <p className="item special description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel itaque quae delectus veritatis consequatur hic!</p>
                            <Link to="/registerUser" className="item btn btn-outline-info">Enter</Link>
                        </div>
                </Wrap>
             </Container>
        </div>
    );
};
Landing.propTypes = {
    isDoctorAuthenticated: PropTypes.bool.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrap = styled.div`
    width: 95%;

`

export default connect(mapStateToProps)(Landing);
