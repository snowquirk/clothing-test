import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInUpPage from './pages/SignInUpPage/SignInUpPage';
import { setCurrentUser } from './actions/userActions';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });

        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignInUpPage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
