import SearchPlayer from './components/SearchPlayer';
import SearchTeam from './components/SearchTeam';
import Result from './components/Result';
import CombineButton from './components/CombineButton';
import classes from './App.module.css';
import Layout from './layout/Layout';
import HeaderTitle from './components/HeaderTitle';

function App() {
  return (
    <Layout headerTitle={<HeaderTitle />}>
        <SearchPlayer />
        <SearchTeam />
        <CombineButton />
        <Result />
    </Layout>
  );
}

export default App;
