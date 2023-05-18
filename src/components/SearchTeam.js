import React, { useState, useEffect } from 'react';

import SearchBox from './SearchBox';


const PLAYER_API_ENDPOINT = "https://m7kq45fu7g.execute-api.ca-central-1.amazonaws.com/nba/teams";


export default function SearchTeam(props) {

  const [teams, setTeam] = useState([]);

  const searchHandler = (name) => {
    console.log('in searchHandler: ' + name)
    fetch(PLAYER_API_ENDPOINT + `?name=${name}`)
      .then((res) => res.json())
      .then((res) => setTeam(res));
  }

  const cardClickHandler = (team) => {
    console.log(team.id + ' clicked')
    props.onTeamSelect(team)
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
  return <SearchBox title="팀" data={teams} selectedItemId={props.selectedTeam?.id} onSearch={searchHandler} onCardClick={cardClickHandler} />
}
