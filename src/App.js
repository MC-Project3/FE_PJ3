import SearchPlayer from './components/SearchPlayer';
import SearchTeam from './components/SearchTeam';
import Result from './components/Result';
import CombineButton from './components/CombineButton';

import HeaderTitle from './components/HeaderTitle';

function App() {
  return (
    <div >
      <HeaderTitle />
      <div style={{ float: 'left' }}>
        <SearchPlayer />
      </div>
      <div style={{ float: 'left' }}>
        <SearchTeam />
      </div>
      <div style={{ float: 'left' }}>
        <CombineButton />
      </div>
      <div style={{ float: 'left' }}>
        <Result />
      </div>
    </div>
  );
}

export default App;
