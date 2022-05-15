import { Card, Tabs } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Defaultphoto from "../../images/defaultphoto.jpg";
import ProductListItems from "./ProductListItems";

const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const { title, images, description } = product;

  return (
    <>
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card
            cover={<img src={Defaultphoto} className="mb-3 card-image" />}
          ></Card>
        )}

        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on +4 0720718034 to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>

        <Card>
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
