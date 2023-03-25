import React, { Component } from 'react'
import {connect} from 'react-redux'


import MovieCard from './MovieCard'


import {Row} from 'react-bootstrap'


export class MovieList extends Component {
    render() {
        const {movies} = this.props;   
        let content = '';

        content = movies.length > 0 
        ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />) 
        : null;
        
        return (
            <Row>
                {content}
            </Row>      
        )
    }
}

const mapStateToProps = (state) => {
    return{
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps)(MovieList)
