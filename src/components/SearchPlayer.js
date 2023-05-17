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
const PLAYER_API_ENDPOINT = "https://5w231plds1.execute-api.ca-central-1.amazonaws.com/2023-05-15/players";

export default function Searchplayer(props) {
  const [players, setPlayer] = useState([]);      //선수 가져오기
  //const [userInput, setUserInput] = useState(''); //사용자 입력 값

  const searchHandler = () => {
    console.log('in searchHandler')
  }


  useEffect(() => {
    fetch(PLAYER_API_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPlayer(res);
      });
  }, []);

  return <SearchBox title="선수" data={players} onSearch={searchHandler} />
}

