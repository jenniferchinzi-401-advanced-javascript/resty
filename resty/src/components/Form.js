import React, {useState, useEffect } from 'react';
import './Form.scss'

function Form(props){

  const [request, setRequest] = useState({});

  useEffect(() => {
    const method = props.request.method || 'get';
    const url = props.request.url || '';
    const data = props.request.data ? JSON.stringify(props.request.data) : '';
    setRequest({ method, url, data });
  }, [props, setRequest]);

  const changeURL = event => {
    let url = event.target.value;
    setRequest({ ...request, url });
  };

  const changeMethod = method => {
    setRequest({ ...request, method });
  };

  const changeBody = event => {
    try {
      let data = JSON.parse(event.target.value);
      setRequest({ ...request, data });
    } 
    catch(error){}
  };

  const handleSubmit = async event => {
    event.preventDefault();
    props.formHandler(request);
  };

  return(

    <form onSubmit={handleSubmit}>
      <div>

        <input 
        type="text" 
        name="url" 
        defaultValue={request.url} 
        placeholder="http://api.url.here/forexample" 
        onChange={changeURL}
        />
        
        <button>GO!</button>

      </div>

      <div className="methods">

        <span 
        className={`method ${request.method === 'get'}`} 
        onClick={() => changeMethod('get')}>
          GET
        </span>

        <span 
        className={`method ${request.method === 'post'}`} 
        onClick={() => changeMethod('post')}>
          POST
        </span>

        <span 
        className={`method ${request.method === 'put'}`} 
        onClick={() => changeMethod('put')}>
          PUT
        </span>

        <span 
        className={`method ${request.method === 'delete'}`} 
        onClick={() => changeMethod('delete')}>
          DELETE
        </span>

        <textarea 
        name="data" 
        onChange={changeBody} 
        defaultValue={request.data}
        />

      </div>

    </form>

  )

}


// class Form extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       url: '',
//       method: ''
//     }
//   }

//   handleURL = event => {
//     let url = event.target.value;
//     this.setState({url});
//   }

//   handleClick = async event => {
//     event.preventDefault();

//     let raw = await fetch(this.state.url);

//     let headers = {};
//     raw.headers.forEach((val, key) => headers[key]=val);

//     console.log('Headers:', headers);

//     let data = await raw.json();
//     console.log('Data:', data);
//     let count = data.count;
//     let results = data.results;

//       // pass count and results to handler that was passed through props
//     this.props.handler(count, results, headers);
//   }

//   handleRadio = event => {
//     let method = event.target.value;
//     this.setState({method})
//   }
  
//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleClick}>
//           <h3>URL: <input onChange={this.handleURL}/><button>GO!</button></h3>
//           <div className="Radio">
//             <input type="radio" id="get" name="method" value="GET" checked="checked" onChange={this.handleRadio} />
//             <label htmlFor="GET">GET</label>
//             <input type="radio" id="post" name="method" value="POST" onChange={this.handleRadio} />
//             <label htmlFor="POST">POST</label>
//             <input type="radio" id="put" name="method" value="PUT" onChange={this.handleRadio} />
//             <label htmlFor="PUT">PUT</label>
//             <input type="radio" id="delete" name="method" value="DELETE" onChange={this.handleRadio} />
//             <label htmlFor="DELETE">DELETE</label>
//           </div>
//         </form>
//       </>
//     )
//   }

// }

export default Form;