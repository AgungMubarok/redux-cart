import React, {Component} from 'react';
import {connect} from 'react-redux'
import {removeCartProduct, removeAllCartProduct} from '../actions/Action'

import './pages.css';
import Button from '../components/button';

class Cart extends Component {
    render() {
        const cart = this.props.cart;
        console.log(cart.length === 0);
        return (
            <div className="container">
                <h1>Pesananmu :</h1>
                <div>
                <div className="button-remove">
                {
                    cart.length > 0 ? (
                        <div className="remove">
                            <Button 
                            onClick={this.props.removeAllCartProduct.bind(this , cart)}
                            text={'Remove All'}
                            secondary
                            />
                        </div>
                    ) : (<h1>Kosong</h1>)
                }
                </div>
                <div className="cartt">
                {
                    cart.map(item => 
                        <div className="product" key={item.id}>
                            <li >
                                <h3>Detail</h3>
                                <p>nama barang: {item.name}</p>
                                <p>harga barang: {`Rp. ${item.price.toLocaleString()}`}</p>
                                <p>jumlah item: {item.quantity}</p>
                                <p>total harga: {item.price * item.quantity}</p>
                                <div className="center">
                                <Button 
                                onClick={this.props.removeCartProduct.bind(this , item)} 
                                text={'Remove'}
                                secondary
                                /></div>
                            </li>
                        </div>
                    )
                }
                </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
    return{
        products : state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeCartProduct: cart => dispatch(removeCartProduct(cart)),
        removeAllCartProduct: cart => dispatch(removeAllCartProduct(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);