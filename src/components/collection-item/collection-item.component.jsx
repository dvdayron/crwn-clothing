import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

function CollectionItem({item, addItem}) {
  return (
    <div  className='collection-item'>
        <div 
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
        className='image'></div>
        <div className='collection-footer'>
          <span className='name'>{item.name}</span>
          <span className='price'>${item.price}</span>
        </div>
        <CustomButton 
          onClick={() => addItem(item)}
          inverted>
          Add to cart
        </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null, 
  mapDispatchToProps
)(CollectionItem);