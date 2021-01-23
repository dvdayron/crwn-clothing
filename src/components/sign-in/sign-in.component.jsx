import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {singInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({
      email: '',
      password: ''
    });
  } 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  } 

  render(){
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2> 
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange}
            name='email'
            type='email' 
            label='Email' 
            value={this.state.email} 
            required/>
          <FormInput 
            handleChange={this.handleChange}
            name='password'
            type='password' 
            label='Password' 
            value={this.state.password} 
            required/>
          <div className='buttons'>
            <CustomButton type='submit'>
              Sign in
            </CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn; 