import React from 'react';
import qs from 'query-string';
import meli from '../apis/meli';

import ProductItem from './ProductItem';
import Breadcrumb from './Breadcrumb';
import NotFound from './NotFound';

import history from "../history";

class ProductList extends React.Component {
    state = {
        products: [],
        categories: [],
        error: false
    };

    componentDidMount(){
        if(this.props.location){
            let q = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
                .search;
            if(q) this.fetchProducts(q);

        }
    }

    componentWillReceiveProps({location}) {
        this.setState({error:false});
        if(location){
            let q = qs.parse(location.search, { ignoreQueryPrefix: true }).search;

            if(q) this.fetchProducts(q);

        }
    }

    async fetchProducts(query){
        try {
            let {data} = await meli.get('/api/items', {
                params: { q: query }
            });

            this.setState({ products: data.items, categories: data.categories});
        } catch ({response}){
            if(response.data.status === 404 || response.data.status === 400){
                this.setState({error: true})
            }
        }

    }

    onProductSelect = ({id}) => {
        history.push({ pathname: `/items/${id}` });
    }

    renderProducts(){

        const { products, error } = this.state;
        if(!products){
            return <div></div>
        }

        if(!error){
            return products.map( product => {
                return <ProductItem key={product.id} product={product} onProductSelect={() => this.onProductSelect(product)}/>
            })
        }
    }

    render(){
        return (
            <div className="container d-flex flex-column">
                <NotFound show={this.state.error}/>
                <Breadcrumb elements={this.state.categories} hide={this.state.error}/>
                <div className="flex-grow-1">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

export default ProductList;