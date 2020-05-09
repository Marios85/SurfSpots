import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
    render() {
    return (
        <div>
        <h1 className="text-left mt-3 mb-3">
         Marios's Surf Directory
       </h1>
       <p className="text-left">A repository for surf spots</p>
       </div>
    );}
}

export {Home}