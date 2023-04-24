// 포켓몬 목록
import React from "react";
import PoketmonList from "../components/PoketmonList";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #d34f49;
  font-weight: bold;
`;

const Description = styled.small`
  color: #6b7280;
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`;

const ImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const IndexPage: React.FC = () => {
  return (
    <Base>
      <Title>POKETMON</Title>
      <Description>
        The POKETMON contains detailed stats for every creature from the
        Poketmon games.
      </Description>
      <PoketmonList />
      <ImageWrapper>
        <Image src="/assets/poketball.svg" />
      </ImageWrapper>
    </Base>
  );
};

export default IndexPage;
