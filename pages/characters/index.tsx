import { useCallback, useEffect, useState } from "react";
import { FILTERED_CHARACTERS } from "../lib/querys";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Button, Input, Stack } from "@chakra-ui/react";

export interface ICharacter {
  id: string;
  name: string;
  gender: string;
  origin: {
    name: string;
  };
  image: string;
}

const index: React.FC = () => {
  const [filter, setFilter] = useState("");
  const { data, refetch } = useQuery(FILTERED_CHARACTERS);

  const filterCharacters = useCallback((filter) => {
    refetch({ nameToFilterBy: { name: filter } });
  }, []);

  const renderList = (): JSX.Element[] => {
    return data?.characters?.results.map(({ id, name }: ICharacter) => {
      return (
        <Link href={`/characters/${id}`} key={id}>
          {name}
        </Link>
      );
    });
  };
  return (
    <div>
      <div>
        <Input
          type="text"
          w="200"
          placeholder="Filter by Name"
          size="md"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
        />
        <Button
          ml="2"
          _hover={{ bg: "#009A40" }}
          _active={{ bg: "#008939" }}
          bg="#00AF49"
          color="white"
          as="a"
          onClick={() => filterCharacters(filter)}
        >
          Filter
        </Button>
      </div>
      <Stack spacing={3} m="3">
        {renderList()}
      </Stack>
    </div>
  );
};

export default index;
