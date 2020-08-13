import React from 'react';
import { Container } from 'reactstrap';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { Provider } from 'react-redux';
import store from './store';
import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <h2>Welcome React</h2>
          <Users />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
