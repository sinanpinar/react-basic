import { Drawer, List, Typography, Button, Checkbox } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function PanelDrawer(props) {
    return (<>
        <Drawer
            title="Shops"
            placement="right"
            closable={false}
            onClose={(() => props.setDrawerOpen(!props.drawerIsOpen))}
            open={props.drawerIsOpen}
        >
            <List
                bordered={false}
                dataSource={props.shopList}
                renderItem={(item) => (
                    <List.Item>
                        <Checkbox defaultChecked={true} ></Checkbox>

                        <img src={"/img/" + item.img} width="75px" />
                        <Typography.Text >{item.title}</Typography.Text>

                        <Button onClick={(() => props.MinusCount(item))}><MinusOutlined /></Button>
                        <Typography.Text >{item.count}</Typography.Text>
                        <Button onClick={(() => props.PlusCount(item))}><PlusOutlined /></Button>
                    </List.Item>
                )}
            >
            </List>
        </Drawer>
    </>)
}

export default PanelDrawer