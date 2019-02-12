import React, { Component } from 'react';
import logo from './harry.jpg';
import Review from './Reviews'
import Cast from './Cast'

class Movie extends Component {
    render() {

      const cast = this.props.movies.cast.map(person => {
        return <Cast personData={person} />;
      });
      return (
        <div className="App">
         
         <h2> {this.props.movie.title}</h2>
        
          <strong> {this.props.movie.rating} </strong>
          <br/> <br/> <br/> <br/> <br/>
         <img src= {this.props.movie.poster} alt="pic" />
           <p> {this.props.movie.description}</p>
           <p> {this.props.movie.director}</p>
           <p>{cast}</p>
           {/* <p> {this.props.movie.cast} </p> */}
         <h2> Review :</h2>
         <Review/>
        </div>
      );
    }
  }

  export default Movie;
