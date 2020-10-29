import React from 'react';

export class Create extends React.Component {


    constructor() {
        super();

        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        this.state = {

            Title: '',
            Year: '',
            Poster: ''

        }

    }

    onChangeMovieTitle(event) {
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    handleSubmit(event) {
        alert("Movie Added " + this.state.Title);
    }

    render() {
        return (
            <div>
                <h1>This is my Create Component</h1>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Add Movie Title: </label>
                        <input type="text" className="form-control"
                         value={this.state.Title}
                            onChange={this.onChangeMovieTitle}>

                        </input>
                    </div>
                    <div>
                        <label>Add Movie Year: </label>
                        <input type="text" className="form-control"
                         value={this.state.Year}
                            onChange={this.onChangeMovieYear}>

                        </input>
                    </div>

                    <div>
                        <label>Add Movie Poster Url : </label>
                        <input type="text" className="form-control"
                         value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}>

                        </input>
                    </div>

                    <div>
                        <input type="submit">
                        </input>
                    </div>

                </form>

            </div>
        )
    }
}