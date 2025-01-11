import PanelHeader from "./components/PanelHeader"
import PanelContext from "./components/PanelContext"
import PanelFooter from "./components/PanelFooter"
import { Layout, App, ConfigProvider } from "antd"
import { darkTheme, lightTheme } from "./assets/theme"
import { useState } from "react"

function PanelApp() {
  const [theme, setTheme] = useState(lightTheme)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onChangeTheme = (checked) => {
    console.log(checked)
    setTheme(checked == true ? darkTheme : lightTheme)
  };

  return (<>
    <ConfigProvider
      theme={theme}
    >
      <App>
        <Layout>
          <PanelHeader theme={theme} onChangeTheme={onChangeTheme} drawerIsOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          <PanelContext drawerIsOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          <PanelFooter />
        </Layout>
      </App>
    </ConfigProvider>
  </>)
}

export default PanelApp