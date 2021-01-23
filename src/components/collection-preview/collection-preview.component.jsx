import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

function CollectionPreview({title, items}) {
  return (
    <div  className='collection-preview'>
        <h1 className='title'>
          {title}
        </h1>
        <div className='preview'>
          {
            items
            .filter((item, i) => i < 4)
            .map(({id, ...otherSectionProps}) => (
              <CollectionItem key={id} {...otherSectionProps}/>
            ))
          }
        </div>
    </div>
  )
}

export default CollectionPreview;