import { useState } from 'react';

import SearchPlayer from './components/SearchPlayer';
import SearchTeam from './components/SearchTeam';
import Result from './components/Result';
import MergeButton from './components/MergeButton';
import classes from './App.module.css';
import Layout from './layout/Layout';
import HeaderTitle from './components/HeaderTitle';

const API_ENDPOINT = 'https://m7kq45fu7g.execute-api.ca-central-1.amazonaws.com/nba'

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedTeam, setSelectedTeam] = useState();
  const [nbaResultBase64Image, setNbaResultBase64Image] = useState();

  const playerSelectHandler = (player) => {
    console.log(player);
    setSelectedPlayer(player.id === selectedPlayer?.id ? null : player)
  }

  const teamSelectHandler = (team) => {
    setSelectedTeam(team.id === selectedTeam?.id ? null : team)
  }

  const mergeClickHandler = () => {         //버튼 활성화 -> 클릭 시 Result에 selectedPlayer와 selectedTeam이 넘어가야한다.
    console.log("mergeButton is working");
    // TODO: merge API 호출 후, 리턴값을 state로 저장
    fetch(`${API_ENDPOINT}/merge?playerId=${selectedPlayer.id}&teamId=${selectedTeam.id}`)
      .then(res => res.text())  // data:image/png;base64,iVBOR~~~
      .then(base64 => {
        console.log(base64);
        setNbaResultBase64Image(base64);
      })
  }

  return (
    <Layout headerTitle={<HeaderTitle />}>
      <SearchPlayer selectedPlayer={selectedPlayer} onPlayerSelect={playerSelectHandler} />
      <SearchTeam selectedTeam={selectedTeam} onTeamSelect={teamSelectHandler} />
      <MergeButton disabled={!(selectedPlayer && selectedTeam)} onClick={mergeClickHandler} />
      <Result image={nbaResultBase64Image} />
    </Layout>
  );
}

export default App;
