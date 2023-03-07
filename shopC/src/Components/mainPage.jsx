import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import bb from "../data";
import { useState } from "react";

function MainPage() {
  return (
    <>
      <div>메인페이지</div>
      <Container>
        <Row>
          <ProductDetail product={product} />
          <Col>
            <img className="body-wash" src="/2.jpg"></img>
            <h5>가이아</h5>
            <p>
              유수분이 밸런스를 이룬 논픽션 바디로션은 피부를 촉촉하게 메우면서
              끈적임 없이 흡수되어 실키한 텍스쳐로 마무리됩니다. 여섯 가지
              시그니처 향이 풍부한 영양성분과 만나 편안하고 부드럽게 피부를
              감싸고, 마치 향수를 뿌린 듯 살결 위에 긴 여운을 남깁니다.
            </p>
          </Col>
          <Col>
            <img className="body-wash" src="/3.jpg"></img>
            <h5>어쩌구저쩌구향수</h5>
            <p>
              유수분이 밸런스를 이룬 논픽션 바디로션은 피부를 촉촉하게 메우면서
              끈적임 없이 흡수되어 실키한 텍스쳐로 마무리됩니다. 여섯 가지
              시그니처 향이 풍부한 영양성분과 만나 편안하고 부드럽게 피부를
              감싸고, 마치 향수를 뿌린 듯 살결 위에 긴 여운을 남깁니다.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default MainPage;
