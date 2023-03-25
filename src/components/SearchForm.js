import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchMovie, fetchMovies, setLoading} from '../actions/searchAction.js'

import {Jumbotron, InputGroup, FormControl, Button, Form} from 'react-bootstrap'

export class SearchForm extends Component {
    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)      
        this.props.setLoading();
    }

    render() {
        return (
            <div>
                <Jumbotron>
              
                <Form onSubmit={this.onSubmit}>
                    <InputGroup>
                        <FormControl 
                        placeholder="inter movie name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                        required
                        />
                        <InputGroup.Append>
                        <Button 
                            type="submit"
                            variant="primary"
                        >
                            Search
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                </Jumbotron> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.movies.text,    
    }
}

export default connect(mapStateToProps, {
    searchMovie,
    fetchMovies,
    setLoading
})(SearchForm)

