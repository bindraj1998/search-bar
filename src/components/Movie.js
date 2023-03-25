import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchMovie, setLoading} from '../actions/searchAction'


import Spinner from './Spinner'


import {Card, Row, ListGroup, Container, Col, Button} from 'react-bootstrap'

export class Movie extends Component {
    
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id) 
        this.props.setLoading();   
    }

    render() {
        const {loading, movie} = this.props;

        let movieData = (
                <Container className="mt-5" >
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <img src={movie.Poster} alt="Movie Poster" />
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <h2 mb={4}>{movie.Title}</h2>
                            <ListGroup>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Genre: </span>{movie.Genre}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Released: </span>{movie.Released}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Rated: </span>{movie.Rated}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">IMDB Rating: </span>{movie.imdbRating}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Director: </span>{movie.Director}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Writer: </span>{movie.Writer}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Actors: </span>{movie.Actors}
                                </ListGroup.Item>                             
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Card className="bg-light my-5 text-dark">
                            <Col lg={12}>
                                <Card.Body>
                                    <Card.Title>About</Card.Title>
                                    <Card.Text>
                                        {movie.Plot}
                                    </Card.Text>
                                    <hr />
                                    <Link to="/"><Button variant="primary">Back to search</Button></Link>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Row>
                </Container>
        )

        let content = loading ? <Spinner /> : movieData;
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading,
        movie: state.movies.movie
    }
}

export default connect(mapStateToProps,{
    fetchMovie,
    setLoading
})(Movie)
