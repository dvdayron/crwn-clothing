import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

function CartIcon({itemsCount, toggleCartHidden}) {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemsCount}</span>
    </div>
  )
}

const mapStateToProps = ({ cart: {cartItems} }) => ({
  itemsCount: cartItems.reduce((accumalatedQuantity, item) => accumalatedQuantity + item.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon);