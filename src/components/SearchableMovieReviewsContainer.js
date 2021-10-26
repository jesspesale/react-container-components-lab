import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

const NYT_API_KEY = '1fDjVkXEdm7FQbvX62BjOD8EajGrvyUP';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        } 
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}/> 
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            )
    }
}

export default SearchableMovieReviewsContainer