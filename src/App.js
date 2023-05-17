import SearchPlayer from './components/SearchPlayer';
import SearchTeam from './components/SearchTeam';
import Result from './components/Result';
import CombineButton from './components/CombineButton';
import classes from './App.module.css';
import HeaderTitle from './components/HeaderTitle';

function App() {
  return (
    <div className={classes.screen}>
      <HeaderTitle />
      <div className={classes.layout}>
        <SearchPlayer />
        <SearchTeam />
        <CombineButton />
        <Result />
      </div>
    </div>
  );
}

export default App;
