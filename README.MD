# The Mana Curve

https://the-mana-curve.herokuapp.com/


This is the README for the final solo project from App Academy.
The project was inspired by Archideky and build using Javascript,
React.js and Redux for the front end and Python with Flask for the backend.

<img src='https://cdn.discordapp.com/attachments/889944469359718421/936665508814684230/splashPage.PNG'></img>


# Features
>Sign up/Login with credentials

>Read, add, edit and remove decks from the from the decks page

>Read and add cards from the scryfall 3rd pary API

>Read, add, and delete cards from a existing deck

# Front End Routes - Logged In
```
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
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} >
            <HomePage />
          </ProtectedRoute>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
```

# Back End Routes

>-- Posts

>Read One Deck: ```
   deck_routes.route('/<int:id>')
    ```

>Read All Decks: ```
    deck_routes.route('/all/<int:userId>')
    ```

>Create Deck: ```
    deck_routes.route('/', methods=['POST'])
    ```

>Update Deck: ```
    deck_routes.route('/<int:id>', methods=['PUT'])
    ```

>Delete Deck: ```
    deck_routes.route('/<int:id>/', methods=['DELETE'])
    ```

# To-Do List
>upvote decklits then sort by number of upvotes

>Comment on others decklists

>Suggentions on search feature
