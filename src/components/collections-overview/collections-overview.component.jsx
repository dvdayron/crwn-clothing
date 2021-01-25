import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionsPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

function CollectionsOverview({collections}) {
  return (
    <div className='collections-overview'>
      {
        collections.map(({id, ...otherSectionProps}) => (
          <CollectionPreview key={id} {...otherSectionProps}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsPreview
});

export default connect(
  mapStateToProps
)(CollectionsOverview);