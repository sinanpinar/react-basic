import { Col, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

function Product(props) {
    const productObj = props.productObj;

    if (!productObj.is_active) return null

    return (
        <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ marginBottom: "24px" }}>
            <Card
                cover={<img src={"/img/" + productObj.image} alt='' />}
                actions={[
                    <PlusOutlined key="add" onClick={(() => props.addShop(productObj))} />,
                ]}
            >
                <Meta title={productObj.title} description={<span className={productObj.price < 5000 ? "price" : "discount"}>{productObj.price} Tl</span>} />
            </Card>
        </Col>
    )
}

export default Product