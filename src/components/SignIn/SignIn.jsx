import { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  onChangeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            type='email'
            name='email'
            onChangeHandler={this.onChangeHandler}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            onChangeHandler={this.onChangeHandler}
            value={this.state.password}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Submit</CustomButton>{' '}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
