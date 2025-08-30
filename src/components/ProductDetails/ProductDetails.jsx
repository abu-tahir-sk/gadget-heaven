
import { TabTitle } from '../../utilites/gadgetTitle';
import GadgetDetails from '../GadgetDetails/GadgetDetails';
import ProductDetailsBanner from '../ProductdetailsBanner/ProductdetailsBanner';

const ProductDetails = () => {
        TabTitle('Details - Gadgetes Heaven')
      return (
            <div>
                  <ProductDetailsBanner></ProductDetailsBanner>
                  <GadgetDetails></GadgetDetails>
            </div>
      );
};

export default ProductDetails;