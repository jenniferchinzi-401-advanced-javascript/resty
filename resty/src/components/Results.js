// Alter the <Results /> component as follows:
// Add support for all REST methods
// Use a conditional component such as <If> to hide/show the results pane when there are none
// Use a conditional component such as <If> to hide/show a loading image during the fetch process

import React from 'react';
import './Results.scss'
// import JSONPretty from 'react-json-pretty';
import ReactJson from 'react-json-view';
import loading from '../images/Loader.gif';

const Results = props => {

  return (
    <section className="results">
      {
        props.loading ? (
          <div className="loading">
            <img src={loading}
            alt="Loading" />
          </div>
        ) : results(props)
      }
    </section>
  )  
}

    function results(props){
        if(props.results){
          return (
          <>
            <h2>Headers</h2>
            <ReactJson src={props.headers} />
      
            <h2>Results</h2>
            <ReactJson src={props.results} />
          </>
          );
        }
  }

// function Results(props) {

//   return (
//     <section className="Choice">
//         <h3>Count: {props.count}</h3>
//         <p>Headers: <JSONPretty data={props.headers} /></p>
//         <p>Results:</p>
//         <ul>
//           {props.results.map(result => {
//             return (
//               <li>
//                 <JSONPretty data={result} />
//                 {/* Note from Cait => If we want to render just hyperlinks and names */}
//                 {/* <a href={result.url}>{result.name}</a> */}
//               </li>
//             )
//           })}
//         </ul>
//       </section>
//   )

// }

export default Results;