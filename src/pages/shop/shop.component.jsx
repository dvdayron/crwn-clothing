import React from 'react';
import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selectors';

function ShopPage({collections}) {
  return (
    <div className='shop-page'>
      {
        collections.map(({id, ...otherSectionProps}) => (
          <CollectionPreview key={id} {...otherSectionProps}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(
  mapStateToProps
)(ShopPage);