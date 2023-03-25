import React, { Component } from 'react'
import {connect} from 'react-redux'


import SearchForm from './SearchForm'
import MoviesList from './MoviesList'
import Spinner from './Spinner'


import {Container} from 'react-bootstrap'

export class Landing extends Component {
    render() {
        const {loading} = this.props  

        return (
            <div>
                <Container>                
                    <SearchForm />
                    {loading ? <Spinner /> : <MoviesList />} 
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    loading: state.movies.loading       
})


export default connect(mapStateToProps)(Landing)
