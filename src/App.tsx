import { useState } from "react";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import SearchForm from "./components/searchForm/SearchForm";
import UserCard from "./components/userCard/UserCard";

import { GithubUser } from "./types";

import { defaultUser } from "./mock";

const BASE_URL: string = 'https://api.github.com/users/';

function App() {
  const [developer, setDeveloper] = useState<GithubUser | null>(defaultUser);

  const fetchDeveloper = async (developerName: string) => {
    const urlDeveloper: string = BASE_URL + developerName;
    const res = await fetch(urlDeveloper);
    const data = await res.json() as GithubUser;
    if (data) {
      setDeveloper(data);
    } else {
      setDeveloper(null)
    }
  }
  return (
    <Container>
      <Header></Header>
      <SearchForm hasError={!developer} getDeveloper={fetchDeveloper}></SearchForm>
      {developer &&
        <UserCard {...developer}
        ></UserCard>}
    </Container>
  );
}

export default App;
