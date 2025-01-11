import { Layout } from "antd";
const { Footer } = Layout;

function PanelFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            ©{new Date().getFullYear()} Created Sinan Pınar
        </Footer>
    )
}

export default PanelFooter