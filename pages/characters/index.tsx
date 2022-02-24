import { useEffect, useState } from "react";
import { FILTERED_CHARACTERS } from "../querys";
import Link from "next/link";
import { useQuery, useLazyQuery } from "@apollo/client";

export interface ICharacter {
  id: string;
  name: string;
  gender: string;
  origin: {
    name: string;
  };
  image: string;
}
[];

const index: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter | []>([]);
  const [filter, setFilter] = useState("");
  const { data, loading } = useQuery(FILTERED_CHARACTERS);
  const [getCharacters, result] = useLazyQuery(FILTERED_CHARACTERS);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [loading]);

  useEffect(() => {
    if (result.data) {
      setCharacters(result.data.characters?.results);
    }
  }, [result]);

  const showPerson = (value: string) => {
    const filterResult = getCharacters({
      variables: { nameToFilterBy: { name: value } },
    });
  };

  const renderList = (): JSX.Element[] => {
    return characters?.map(({ id, name, ...character }: ICharacter) => {
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
        <input
          type="text"
          style={{ border: "2px solid black", height: "40px" }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
        />
        <button
          style={{
            border: "2px solid black",
            backgroundColor: "lightblue",
            height: "40px",
            marginLeft: "10px",
          }}
          onClick={() => showPerson(filter)}
        >
          Filter
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "23px",
          color: "blue",
        }}
      >
        {renderList()}
      </div>
    </div>
  );
};

export default index;
