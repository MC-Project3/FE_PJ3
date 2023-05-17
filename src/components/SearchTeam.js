import { useState } from 'react';
import SearchBox from './SearchBox';
export default function SearchTeam(props) {

  const [teams, setTeam] = useState([]);
  const [userInput, setUserInput] = useState(''); //사용자 입력 값

  const searchHandler = () => {
    console.log('in searchHandler')
  }

  const searched = teams.filter((item) => item.name.toLowerCase().includes(userInput));
  return <SearchBox title="팀" data={teams} onSearch={searchHandler} />
}
