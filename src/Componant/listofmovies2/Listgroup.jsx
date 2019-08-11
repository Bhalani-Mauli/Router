import React, { Component } from 'react';



export default class Listgroup extends Component {





    render() {

        return (

            <React.Fragment>

                <ul className="list-group">

                    {

                        this.props.genres.map(genre => (
                            <li id={genre._id} className="list-group-item">{genre.name}</li>
                        ))

                    }

                </ul>

            </React.Fragment>

        )
    }

}
