import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectCollectionsForPreview } from './redux/shop/shop.selectors'


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount () {
    const { setCurrentUser, collectionsArray } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div className='wrapper'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={
            () => this.props.currentUser
              ? (<Redirect to='/' />)
              : (<SignInAndSignUpPage />)
          } />
        </Switch>
      </div>
    )
  }
}

const mapsStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})
// dispatch é um obj interno de connect()
const mapsDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapsStateToProps,
  mapsDispatchToProps)(App)
