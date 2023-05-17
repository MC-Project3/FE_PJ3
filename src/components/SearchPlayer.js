import { useState } from 'react';
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

export default function Searchplayer(props) {
  const [players, setPlayer] = useState([]);
  const [userInput, setUserInput] = useState(''); //사용자 입력 값

  const searchHandler = () => {
    console.log('in searchHandler')
  }

  const searched = players.filter((item) => item.name.toLowerCase().includes(userInput));
  return <SearchBox title="선수" data={players} onSearch={searchHandler} />
}

