import React, { Component } from 'react';
import api from '../../services/api'
import "./styles.css"
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('http://localhost:3001/api/products');

        this.setState({ products: response.data });
    };



    render() {
        const { products } = this.state;

        return (
            <div className="product-list">

                <article>
                    <Link to={`/products/`}>Cadastrar Novo Registro</Link>
                </article>
                {products.map(product => (

                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <button onClick={this.deleteProduct}>Excluir</button>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }

    async deleteProduct(id) {
        //alert(id);
        const response = await api.delete(`http://localhost:3001/api/products/${id}`);
        console.log(response);
    };
}

