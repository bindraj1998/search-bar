import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//Bootstrap
import {Card, Button} from 'react-bootstrap'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;   // <-- This movie is bringing title,year,imdbID,type, & Poster (See Redux DevTools)
        return (
            <Card bg="secondary" text="light" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.Poster} alt="Movie Poster" />
                <Card.Body>
                    <Card.Title>{movie.Title} -{movie.Year}</Card.Title>
                    {/* <Link to={`/movie/${movie.imdbID}`}>
                        <Button variant="primary">More Details</Button>
                    </Link> */}
                </Card.Body>
            </Card>
        )
    }
}

export default MovieCard

