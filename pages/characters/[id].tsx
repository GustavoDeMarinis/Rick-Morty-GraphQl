import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ICharacter as IProps } from "./index";
import { CHARACTER_BY_ID } from "../querys";

const CharacterDetail: React.FC<IProps> = () => {
  const { query } = useRouter();
  const [character, setCharacter] = useState<IProps | null>();
  const { data, loading } = useQuery(CHARACTER_BY_ID, {
    variables: { id: query.id },
  });

  useEffect(() => {
    if (data) {
      setCharacter(data.character);
    }
  }, [loading]);

  if (character === null) return null;

  return (
    <div>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        {character?.name}
      </h1>
      <img src={character?.image} alt="" />
      <p>Gender: {character?.gender}</p>
      <p>Origin: {character?.origin?.name}</p>
    </div>
  );
};

export default CharacterDetail;
