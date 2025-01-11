import { Row } from "antd"
import Product from "./Product"
import { items } from "../assets/data"


function Products(props) {
    return (<>
        <Row gutter={24} justify="start" align="top">
            {
                items.length > 0 ? (
                    items.map((item) => (
                        <Product key={item.id} productObj={item} addShop={props.addShop} />
                    ))
                ) : (
                    <p>Satılık Ürün Yok</p>
                )
            }
        </Row>
    </>)
}

export default Products