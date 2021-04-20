import { Component } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_DATA from '../../shopData';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
