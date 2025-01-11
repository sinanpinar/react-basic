import { Layout, Menu, Switch } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Header } = Layout;

function PanelHeader(props) {

    const [page, setPage] = useState("home")

    const items = [
        {
            label: "Home",
            key: "home",
            icon: <HomeOutlined />,
        },
        {
            label: <a onClick={(() => props.setDrawerOpen(!props.drawerIsOpen))}></a>,
            key: "shop",
            icon: <ShoppingCartOutlined />,
        }
    ]

    function changePage(e) {
        setPage(e.key)
    }

    return (<>
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                background: props.theme.token.colorBgBase
            }}
        >
            <div className="demo-logo" />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={page}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
                onClick={((e) => changePage(e))}
            />
            <Switch onChange={props.onChangeTheme} />
        </Header>
    </>)
}

export default PanelHeader