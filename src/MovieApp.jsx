import { Typography } from "antd";

const { Title } = Typography

function MovieApp() {
  return (<>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0
      }}
    >
      <Title type="success">Hello World</Title>
    </div>
  </>)
}

export default MovieApp