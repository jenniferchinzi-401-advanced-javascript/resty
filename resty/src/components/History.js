// Create a new <History/> inline component that will:
// Show a simple history list on the main page
// Allow a user to click and re-run any previous query

import React from 'react';

function History(props){

  const calls = props.calls || {};

  function loadRequest(apiCall){
    props.updateHandler(apiCall);
  }

  function printResults(method, url){

    // May be going down a rabbit hole??? Current theory is a second onClick option to run the API call but somehow I'm getting lost in the weeds in making that happen

  }
  
  return (    
      <aside className="history">
      <ul>
        {
          Object.keys(calls).map(key => 
            <li key={key}>

            <span className={`method ${props.calls[key].method}`}>
              {props.calls[key].method}
            </span>
            <button 
            className="url"
            onClick={() => printResults(props.calls[key].method, props.calls[key].url)} 
            onClick={() => loadRequest(props.calls[key])}>
              {props.calls[key].url}
            </button>

            </li>,
            )
        }
      </ul>
    </aside>
  );
}

export default History;