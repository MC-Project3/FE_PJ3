import React, { useState, useEffect } from 'react';

import SearchBox from './SearchBox';

// const data = [
//   {
//     imageUrl: 'logo192.png',
//     name: 'Luka doncici'
//   },
//   {
//     imageUrl: 'logo192.png',
//     name: 'Stephen Curry'
//   },
//   {
//     imageUrl: 'logo192.png',
//     name: 'Lebron Jamse'
//   },
// ]
const PLAYER_API_ENDPOINT = "https://m7kq45fu7g.execute-api.ca-central-1.amazonaws.com/nba/players";

export default function Searchplayer(props) {
  const [players, setPlayer] = useState([]);      //선수 가져오기  

  const searchHandler = (name) => {
    console.log('in searchHandler: ' + name)
    fetch(PLAYER_API_ENDPOINT + `?name=${name}`)
      .then((res) => res.json())
      .then((res) => setPlayer(res));
  }

  const cardClickHandler = (player) => {
    console.log(player.id + ' clicked')
    props.onPlayerSelect(player)
  }

  //이름을 받아서 같은 이름만 보이게 기능
  useEffect(() => {
    fetch(PLAYER_API_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPlayer(res);
      });
  }, []);

  return <SearchBox title="선수" data={players} selectedItemId={props.selectedPlayer?.id} onSearch={searchHandler} onCardClick={cardClickHandler} />
}

