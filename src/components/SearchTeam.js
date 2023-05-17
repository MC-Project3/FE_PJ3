import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';


const PLAYER_API_ENDPOINT = "";


export default function SearchTeam(props) {

  const [teams, setTeam] = useState([]);
  const [userInput, setUserInput] = useState(''); //사용자 입력 값

  const searchHandler = () => {
    console.log('in searchHandler')
  }

  useEffect(() => {
    fetch(PLAYER_API_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTeam(res);
      });
  }, []);

  //const searched = teams.filter((item) => item.name.toLowerCase().includes(userInput));
  return <SearchBox title="팀" data={teams} onSearch={searchHandler} />
}
