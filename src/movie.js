import React, { Component } from 'react';
import logo from './harry.jpg';
import Review from './Reviews'
import Cast from './Cast'

class Movie extends Component {
  state = { Liked:false , Hided:false}
    render() {
      let Hide='';

      if(this.state.Hided === true){
        Hide = this.props.movie.cast.map(actor => (
          <Cast name={actor.name} role={actor.role}/>
       ))
       }
      //  else {
      //   Hide='Show'
      //  }
   let LikedOrNot='';



   if(this.state.Liked === true){
    LikedOrNot='Unlike'
   }
   else {
    LikedOrNot='Like'
   }
      // const cast = this.props.movies.cast.map(person => {
       
      // });
      return (
        <div className="App">
         
         <h2> {this.props.movie.title}</h2>
        
          <strong> {this.props.movie.rating} </strong>
          <br/> <br/> <br/> <br/> <br/>
         <img src= {this.props.movie.poster} alt="pic" />
           <p> {this.props.movie.description}</p>
           <p> {this.props.movie.director}</p>
           {Hide}
         
           {/* <p> {this.props.movie.cast.map(actor => (
            <Cast name={actor.name} role={actor.role}/>
         ))
        } </p> */}

         <h2> Review :</h2>
      
         <Review />
         <button onClick={this.toggleHide} > 
         Show
         </button>

         <button onClick={this.toggleLike} > 
         {LikedOrNot}
         </button>
        </div>
      );
    }
    toggleLike = () => { this.setState({Liked:!this.state.Liked })
  }
    toggleHide = () => { this.setState({Hided:!this.state.Hided })
}
  }

  export default Movie;
