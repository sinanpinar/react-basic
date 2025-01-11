import { Layout, Drawer } from "antd"
import Products from "./Products"
import { useState } from "react";
import PanelDrawer from "./PanelDrawer";

const { Content } = Layout;


function PanelContext(props) {

    const [shopList, setShopList] = useState([])

    function addShop(productObj) {
        const item = shopList.filter(i => i.id === productObj.id)
        if (item.length > 0) {
            PlusCount(productObj)
        } else {
            setShopList((items) => [...items, { "id": productObj.id, "title": productObj.title, "count": 1, "img": productObj.image }])
        }
    }
    function DeleteShop(item) {
        console.log(item)
        setShopList(items => items.filter(i => i.id !== item.id))
    }
    function MinusCount(item) {
        const i = shopList.filter(i => i.id === item.id)
        console.log(i)
        if (i[0].count <= 0) {
            console.log(i)
            DeleteShop(i)
        } else {
            setShopList(items => items.map(i => i.id == item.id ? { ...i, count: i.count - 1 } : i))
        }
    }
    function PlusCount(item) {
        setShopList(items => items.map(i => i.id == item.id ? { ...i, count: i.count + 1 } : i))
    }

    return (<>
        <Content style={{ padding: '24px' }}>
            <Products addShop={addShop} />
            <PanelDrawer drawerIsOpen={props.drawerIsOpen} setDrawerOpen={props.setDrawerOpen} shopList={shopList} MinusCount={MinusCount} PlusCount={PlusCount} />
        </Content>
    </>)
}
export default PanelContext