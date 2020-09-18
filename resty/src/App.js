import React from 'react';
import './App.css';
import md5 from 'md5';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component Imports
import Header from './components/Header'
import Form from './components/Form'
import Results from './components/Results'
import History from './components/History'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      history: {},
      loading: false,
      request: {},
    }
  }

  toggleLoadingState = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = async (request) => {

    try {
      this.toggleLoadingState();
      this.updateRequest(request);
      let response = await axios(request);
      this.toggleLoadingState();
      this.updateHistory(request);
      this.updateResults(response.headers, response.data);
    }
    catch (error) {
      this.toggleLoadingState();
      console.log('ERROR:', error);
    }
  }

  updateHistory(request){

    let hash = md5(JSON.stringify(request));

    const history = { ...this.state.history, [hash]: request}

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    })
  }

  updateRequest = (request) => {
    this.setState({ request });
  }

  updateResults = (headers, results) => {
    this.setState({ headers, results });
  }


  render(){
    return (
    <BrowserRouter>
      <div className="App">

        <Header />

          <main role='document'>
          <Switch>

          <Route exact path="/">
            <Form formHandler={this.handleForm} request={this.state.request}/>

            <History calls={this.state.history} updateHandler={this.updateRequest}/>

            <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results}/>
          </Route>
            
          <Route exact path="/history">


            <History calls={this.state.history} updateHandler={this.updateRequest}/>


          </Route>

          <Route exact path="/help">
            <p>Help & About Us...coming soon</p>
          </Route>

            </Switch>
          </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}
}

export default App;


// https://swapi.dev/api/people