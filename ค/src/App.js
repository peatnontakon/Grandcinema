import './App.css';
import MovieList from './component/movie';

function App() {
  return (
    <div className="App">
      <p className='text-white'>Grandcinema</p>
      <p className='text-white'>เว็บไซต์เพื่อการรับชมภาพยนตร์</p>
      <MovieList />
    </div>
  );
}

export default App;
