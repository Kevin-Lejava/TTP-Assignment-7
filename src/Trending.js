import './App.css';
import React from 'react'
import axios from "axios"
import Navbar from './Navbar'

class Trending extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        };
    }

    componentDidMount() {
        axios
            .get(
                "http://api.giphy.com/v1/gifs/trending?api_key=Qf9TvbTAKlIT1QTuVxLpAUBR86Hzf2Qy"
            )
            .then(response => {
                this.setState({ gifs: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        if (!this.state.gifs.length) return null;

        return (
            <div>
                <Navbar />
                <div className="row row-cols-1 row-cols-md-3">
                    {this.state.gifs.map(gif => (
                        <div col mb-4>
                            <div className="card mt-5" key={gif.id}>
                                <img
                                    className="card-img-top"
                                    src={gif.images.preview_gif.url}
                                />
                                <div className="card-body">
                                    <h4 className="card-title">{gif.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Trending;