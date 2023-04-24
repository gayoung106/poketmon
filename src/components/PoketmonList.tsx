import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div``;

const ListItem = styled.li``;

const List = styled.ul``;

const Image = styled.img``;

const Name = styled.p``;

const Index = styled.p``;

//포켓몬 이미지를 가져오는 함수
const getImageUrl = (index: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

const PoketmonList: React.FC = () => {
  return (
    <Base>
      <List>
        <ListItem>
          <Image src={getImageUrl(1)} />
          <Name>bulbasaur</Name>
          <Index>#001</Index>
        </ListItem>
      </List>
    </Base>
  );
};

export default PoketmonList;
