import React from "react";

import "./index.css";



export default class Principal extends React.Component {

    state = {
        filmes: [],
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;

        if (!value) return;


        fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
            .then((response) => response.json())
            .then(response => {
                this.setState({
                    filmes: response
                });
                console.log(response);
            });
    };
    render() {
        return (
            <div className='principal'>
                <input type="search" onChange={this.handleInputChange} />
                <h1>Pesquise pelo seu filme favorito :)</h1>
                
                <ul className="lista">

                    {this.state.filmes.map((item) => (
                        <li key={item.show.id}>
                            <p>
                                <b>Nome do Filme:</b> {item.show.name}
                            </p>

                            <p>
                                <b>Gênero:</b> {item.show.genres.join(",")}
                            </p>

                        </li>
                    ))}
                </ul>

            </div>

        );

    }
}




