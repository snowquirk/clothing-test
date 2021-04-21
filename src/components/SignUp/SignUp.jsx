import { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('password not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  onChangeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2>Create a new account</h2>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            onChange={this.onChangeHandler}
            label='Name'
            required
          ></FormInput>
          <FormInput
            name='email'
            type='email'
            value={email}
            onChange={this.onChangeHandler}
            label='Email'
            required
          ></FormInput>
          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={this.onChangeHandler}
            label='Password'
            required
          ></FormInput>
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={this.onChangeHandler}
            label='Confirm Password'
            required
          ></FormInput>

          <CustomButton type='submit'>Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
