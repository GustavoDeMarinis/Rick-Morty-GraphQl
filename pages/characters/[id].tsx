import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CHARACTER_BY_ID } from "../lib/querys";
import { Text } from "@chakra-ui/react";

const CharacterDetail: React.FC = () => {
  const { query } = useRouter();

  const { data } = useQuery(CHARACTER_BY_ID, {
    variables: { id: query.id },
  });

  if (!data) return null;

  return (
    <div>
      <Text fontSize="3rem" fontWeight="bold">
        {data.character.name}
      </Text>
      <img src={data.character.image} alt="" />
      <Text>Gender: {data.character.gender}</Text>
      <Text>Origin: {data.character.origin.name}</Text>
    </div>
  );
};

export default CharacterDetail;
