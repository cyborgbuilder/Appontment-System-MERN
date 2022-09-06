import React, { useState, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import { register} from '../../actions/authUser';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components'

const UserRegister = ({ setAlert, register, isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    }
    if(isUserAuthenticated) {
        return <Redirect to='/appointment' />
    }

    return (
        <div>
            <Container>
                <Wrap>
                    <Left>
                    <h1>Enter Your Details</h1>
                    <form onSubmit={e => onSubmit(e)}>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email"
                                    className="form-control" 
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                />
                                {/* <small id="emailHelp" className="form-text text-muted">This site uses <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">Gravatar </a> so if you want a profile image, use a Gravatar email</small> */}
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Full Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    value={name}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputPassword1">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                    value={password} 
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputPassword1">Confirm Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password2"
                                    value={password2} 
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <input type="submit" className="btn btn-info" style={{color: "black"}} value="Sign Up" />
                            </form>
                    </Left>
                    <Right>
                    <Box>
						<Quote>
							{/* <BsChatLeftQuoteFill /> */}
						</Quote>
						<Head>
							<h1>Make a Dream.</h1>
						</Head>
						<Paragraph>
							<p>Once you start making the effort to ‘wake yourself up’—that is, be more mindful in your activities—you suddenly start appreciating life a lot more</p>
						</Paragraph>
						<Source>
							<img src="https://www.speakingmatters.org/wp-content/uploads/2020/01/Robert-Biswas-Diener5.jpg" />
							<h2>Robert Biswas-Diener</h2>
						</Source>

						
						</Box>
                    </Right>
                </Wrap>
            </Container>
        </div>
    );
};

UserRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps =state => ({
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Wrap = styled.div`
	width: 80%;
	height: 80vh;
	display: flex;
	border-radius: 10px;
	box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`

const Left = styled.div`
	width: 50%;
	background: red;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	form{
	display: flex;
	flex-direction: column;
	align-items: center;
	}
	label{
		font-size: 18px;
	}
    h1{
		font-size: 40px;
        margin-bottom: 20px;

	}
	input{
	outline: none;
	border: none;
	width: 370px;
	padding: 15px;
	border-radius: 10px;
	background-color: #edf5f3;
	margin: 5px 0;
	font-size: 14px;
	}
	.error_msg {
		width: 370px;
		padding: 15px;
		margin: 5px 0;
		font-size: 14px;
		background-color: #f34646;
		color: white;
		border-radius: 5px;
		text-align: center;
	}
	button{
	border: none;
	outline: none;
	padding: 12px 0;
	margin: 20px 0;
	background-color: #46eacc;
	border-radius: 5px;
	width: 80%;
	font-weight: bold;
	font-size: 15px;
	cursor: pointer;
    color: black;
	}
	img{
		width: 18%;
	}
`

const Right = styled.div`
	width: 50%;
	background: #63e4f2;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`
const Box = styled.div`
	width: 80%;
`
const Quote = styled.div`
	font-size: 40px;
`

const Head = styled.div`
	h1{
		font-size: 80px;
		color: white;
	}
`

const Paragraph = styled.div`
	width: 80%;
	text-align: right;
	color: #9b9b9b;
`


const Source = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 20px 0;
	img{
		width: 10%;
		border-radius: 50%;
		margin: 0 5px;
	}
	h2{
		font-size: 18px;
		margin: 5px ;
		color: #fff;
	}
`

const Linker = styled.div`
	display: flex;
	justify-content: space-between;
	h1{
		font-size: 20px;
		padding: 10px 0;
		color: #fff;
	}
	button{
		border: none;
	outline: none;
	padding: 12px 0;
	background-color: #46eacc;
	border-radius: 5px;
	width: 180px;
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
	}
`

export default connect(mapStateToProps, {setAlert, register})(UserRegister);
