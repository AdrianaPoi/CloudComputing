import { Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import defaultphoto from "../../images/defaultphoto.jpg";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, description, slug, price } = product;
  return (
    <>
      <Card
        cover={
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={images && images.length ? images[0].url : defaultphoto}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
        ]}
      >
        <Meta
          title={`${title} - €${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
