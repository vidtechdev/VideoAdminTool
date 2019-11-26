import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import AppNavBar from './components/AppNavBar';
import AddVideo from './components/AddVideo';
import AllVideos from './pages/AllVideos';
import Home from './components/Home.js';
// import Clusters from './pages/VideosByCluster.js';

import { TabContent, TabPane, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Provider } from 'react-redux';
import store from './store';


class AppTab extends Component {

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
      activeTab: 'home'
    };
  }

  toggle(tab) {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    };
  }
    render() {
    return(

        <Provider store={store}>
            <div className="App">
            
            <Navbar color="light" light expand="sm" className="mb-5" sticky="top">
            <NavbarBrand onClick={() => {this.toggle('home')}}>Video Admin Tool</NavbarBrand>
              <Nav tabs>

                <NavItem>
                  <NavLink
                    className={({ active: this.state.activeTab === 'home' })}
                    onClick={() => { this.toggle('home'); }}>
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={({ active: this.state.activeTab === 'add' })}
                    onClick={() => { this.toggle('add'); }}>
                    Add New Videos
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={({ active: this.state.activeTab === 'all' })}
                    onClick={() => { this.toggle('all'); }}>
                    All Videos
                  </NavLink>
                </NavItem>

                {/* <NavItem>
                  <NavLink
                    className={({ active: this.state.activeTab === 'clusters' })}
                    onClick={() => { this.toggle('clusters'); }}>
                    Videos By Cluster
                  </NavLink>
                </NavItem> */}

              </Nav>
              </Navbar>

              <TabContent activeTab = {this.state.activeTab}>
                <TabPane tabId="home">
                  <Home />
                </TabPane>
                <TabPane tabId="add">
                  <AddVideo />
                </TabPane>
                <TabPane tabId="all">
                  <AllVideos />
                </TabPane>
                {/* <TabPane tabId="clusters">
                  <Clusters />
                </TabPane> */}
              </TabContent>

            </div>
  
        </Provider>
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


    // ALTERNATE To ABOVE  --> Works locally, not on Heroku //
    //     <div className='App'>
    //     <Provider store={store}>
    //       <Switch>
    //         <Route exact path='/' component={Home} />
    //         <Route path='/add' component={AddVideo} />
    //         <Route path='/showall' component={AllVideos} />
    //       </Switch>
    //     </Provider>
    //   </div>
    // )
    // return (
    //   <Switch>
    //     <App />
    //   </Switch>




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

export default AppTab;
