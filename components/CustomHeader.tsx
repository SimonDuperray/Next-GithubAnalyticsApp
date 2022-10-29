import { Layout, Col, Row } from "antd";

const CustomNavBar = () => {
    const { Header } = Layout;
    return (
        <Header style={{ backgroundColor: "#274684"}}>
            <Row>
                <Col style={{color: "#fff"}}>
                    <a
                        id="home"
                        href="/"
                        style={{
                            color: "#fff",
                            letterSpacing: "1px"
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