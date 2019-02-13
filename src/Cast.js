import React, { Component } from 'react';


class Cast extends Component {
    render() {
       

        //   const moviesCast = cast.map((cast) => <Cast ca= {cast} />  )
      return (
        <div className="App">
        
         <p>{this.props.name} -  {this.props.role}</p>
      
       
        </div>
      );
    }
  }

  export default Cast;
