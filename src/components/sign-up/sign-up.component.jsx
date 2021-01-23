import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault(); 
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert('Passwords do not match!');
      return;
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(error) {
      console.error(error);
    }
  } 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  } 

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2>I do no have a account</h2> 
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange}
            name='displayName'
            type='text' 
            label='Display name' 
            value={displayName} 
            required/>
          <FormInput 
            handleChange={this.handleChange}
            name='email'
            type='email' 
            label='Email' 
            value={email} 
            required/>
          <FormInput 
            handleChange={this.handleChange}
            name='password'
            type='password' 
            label='Password' 
            value={password} 
            required/>
          <FormInput 
            handleChange={this.handleChange}
            name='confirmPassword'
            type='password' 
            label='Confirm password' 
            value={confirmPassword} 
            required/>
          <CustomButton type='submit'>
            Sign up
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;