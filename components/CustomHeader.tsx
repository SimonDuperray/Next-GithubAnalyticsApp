import { Layout, Col, Row } from "antd";

const CustomNavBar = () => {
    const { Header } = Layout;
    return (
        <Header style={{ backgroundColor: "#212129"}}>
            <Row>
                <Col style={{color: "#fff"}}>
                    <a
                        id="home"
                        href="/"
                        style={{
                            color: "#F5C014",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            fontWeight: "bold"
                        }}
                    >
                        Github Analytics App
                    </a>
                </Col>
            </Row>
        </Header>
    )
}

export default CustomNavBar;