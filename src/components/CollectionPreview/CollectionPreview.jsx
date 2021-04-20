import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';
const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title}</h2>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}>
              {item.name}
            </CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
