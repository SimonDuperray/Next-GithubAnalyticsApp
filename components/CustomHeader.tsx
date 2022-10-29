import { Layout, Col, Row } from "antd";

const CustomNavBar = () => {
    const { Header } = Layout;
    return (
        <Header>
            <Row justify="space-between">
                <Col style={{color: "#fff"}}>
                    <a id="home" href="/">Github Analytics App</a>
                </Col>
            </Row>
        </Header>
    )
}

export default CustomNavBar;