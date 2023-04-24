//포켓몬 아이디를 파라미터로 받아와서 선택한 포켓몬의 상세정보가 표시
import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();

  return <div>DetailPage id: {id}</div>;
};

export default DetailPage;
