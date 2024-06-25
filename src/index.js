import ReactDOM from 'react-dom';
import React from 'react';
const App = () => {
    return (
        <>
        <div className='container bg-success text-light mt-4'>
        <h1>
            <ul> 
                <li>
             Hello this is a App function component
             </li>
             </ul>
             </h1>
        </div>
       
        </>
     );
}
let rootNode = ReactDOM.createRoot(document.getElementById('root'));
rootNode.render(<App/>);
