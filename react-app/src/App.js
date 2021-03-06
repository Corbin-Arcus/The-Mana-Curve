import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import CreateCardPage from './components/CreateCardPage'
import CardByIdPage from './components/CardByIdPage';
import CreateDeckPage from './components/CreateDeckPage';
import DeckByIdPage from './components/DeckByIdPage';
import UpdateDeckPage from './components/UpdateDeckPage';
import DecksPage from './components/DecksPage';
import { Container } from './components/styles/Container.styled'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import CreateCommentPage from './components/CreateCommentPage';
import CommentsPage from './components/CommentsPage';
import UpdateCommentPage from './components/updateCommentPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [currentCard, setCurrentCard] = useState({})

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/cards/find' exact={true}>
            <CreateCardPage />
          </Route>
          <Route path='/decks/:id/edit' exact={true}>
            <UpdateDeckPage />
          </Route>
          <Route path='/decks/all' exact={true}>
            <DecksPage />
          </Route>
          <Route path='/cards/:id' exact={true}>
            <CardByIdPage />
          </Route>
          <Route path='/decks/new' exact={true}>
            <CreateDeckPage />
          </Route>
          <Route path='/decks/:id' exact={true}>
            <CreateCardPage setCurrentCard={setCurrentCard} currentCard={currentCard}/>
            <DeckByIdPage setCurrentCard={setCurrentCard} currentCard={currentCard}/>
            <CreateCommentPage />
            <CommentsPage />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <Route path='/' exact={true} >
            <HomePage />
          </Route>
          <ProtectedRoute path='/comments/:id/edit' exact={true}>
            <UpdateCommentPage />
          </ProtectedRoute>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

