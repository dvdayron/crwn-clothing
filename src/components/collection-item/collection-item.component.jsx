import {CollectionItemContainer, CollectionItemImage, CollectionItemFooter} from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

function CollectionItem({item, addItem}) {
  return (
    <CollectionItemContainer>
        <CollectionItemImage 
          style={{
            backgroundImage: `url(${item.imageUrl})`
          }}>
        </CollectionItemImage>
        <CollectionItemFooter>
          <span className='name'>{item.name}</span>
          <span className='price'>${item.price}</span>
        </CollectionItemFooter>
        <CustomButton 
          onClick={() => addItem(item)}
          inverted>
          Add to cart
        </CustomButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null, 
  mapDispatchToProps
)(CollectionItem);