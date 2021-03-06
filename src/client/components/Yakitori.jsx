import React, { Component } from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions/orderActions';
import Item from './Item.jsx';
import Navigation from './navigation/navigation.jsx';
const mapStateToProps = store => {
  return {
    productList: store.product.productList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (category) => {
      dispatch(actions.getProducts(category));
    }
  }
}
class Yakitori extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts('Yakitori');
  }

  render() {
    const yakitoriProducts = this.props.productList.map(element => {
      return ( <Item name = {element.name} 
        price = {element.price} 
        category = {element.category} 
        description = {element.description}
        key = {element.product_id}
        subCategory = {element.sub_category}
        index = {element.index}
        quantity = {element.quantity}
        passObj = {element}
        ></Item>)
    })
    return (
      <div>
        <Navigation/>
        <h1>Yakitori</h1>
        {yakitoriProducts}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Yakitori);
