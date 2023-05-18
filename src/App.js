import { useState } from 'react';

import SearchPlayer from './components/SearchPlayer';
import SearchTeam from './components/SearchTeam';
import Result from './components/Result';
import CombineButton from './components/CombineButton';
import classes from './App.module.css';
import Layout from './layout/Layout';
import HeaderTitle from './components/HeaderTitle';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedTeam, setSelectedTeam] = useState();

  const playerSelectHandler = (player) => {
    console.log(player);
    setSelectedPlayer(player.id === selectedPlayer?.id ? null : player)
  }

  const teamSelectHandler = (team) => {
    setSelectedTeam(team.id === selectedTeam?.id ? null : team)
  }

  return (
    <Layout headerTitle={<HeaderTitle />}>
      <SearchPlayer selectedPlayer={selectedPlayer} onPlayerSelect={playerSelectHandler} />
      <SearchTeam selectedTeam={selectedTeam} onTeamSelect={teamSelectHandler} />
      <CombineButton />
      <Result />
    </Layout>
  );
}

export default App;
