import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import AddVideo from './components/AddVideo';
import AllVideos from './pages/AllVideos';
import Home from './components/Home';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    const App = () => (
      <div className='App'>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddVideo} />
            <Route path='/showall' component={AllVideos} />
          </Switch>
        </Provider>
      </div>
    )
    return (
      

          <App />
      
    );
 //////////////////////////////////////////////////////
 // Below Works on Local Dev Server, but NOT on Heroku   
    // return (
    //     <Provider store={store}>
    //       <div className="App">
    //         <BrowserRouter>
    //           {/* <AppNavBar /> */}
    //           {/* <Route exact path='/' component={} /> */}
    //           <Route exact path='/' component={Home} />
    //           <Route path='/add' component={AddVideo} />
    //           <Route path='/showall' component={AllVideos} />
    //         </BrowserRouter>
    //       </div>

      // Below Works on Local Dev Server AND Heroku production deploy
        //  <div className="App">
        //     <AppNavBar />
        //     <Container>           
        //       <AddVideo />
        //     </Container>
        //     <Container>
        //       <AllVideos />
        //     </Container>
        //   </div>
    //    
    //    </Provider>
    //);
  }
}

export default App;
