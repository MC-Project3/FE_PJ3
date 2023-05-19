import { useState } from 'react';

import SearchPlayer from './components/SearchPlayer';
import SearchTeam from './components/SearchTeam';
import Result from './components/Result';
import MergeButton from './components/MergeButton';
import classes from './App.module.css';
import Layout from './layout/Layout';
import HeaderTitle from './components/HeaderTitle';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedTeam, setSelectedTeam] = useState();
  const [nbaResult, setnbaResult] = useState();
  const playerSelectHandler = (player) => {
    console.log(player);
    setSelectedPlayer(player.id === selectedPlayer?.id ? null : player)
  }

  const teamSelectHandler = (team) => {
    setSelectedTeam(team.id === selectedTeam?.id ? null : team)
  }

  const mergeClickHandler = () => {         //버튼 활성화 -> 클릭 시 Result에 selectedPlayer와 selectedTeam이 넘어가야한다.
    console.log("mergeButton is working");
    //selectedPlayer, selectedTeam;
    // TODO: merge API 호출 후, 리턴값을 state로 저장
  }

  return (
    <Layout headerTitle={<HeaderTitle />}>
      <SearchPlayer selectedPlayer={selectedPlayer} onPlayerSelect={playerSelectHandler} />
      <SearchTeam selectedTeam={selectedTeam} onTeamSelect={teamSelectHandler} />
      <MergeButton disabled={!(selectedPlayer && selectedTeam)} onClick={mergeClickHandler} />
      <Result player={selectedPlayer} team={selectedTeam} />
    </Layout>
  );
}

export default App;
