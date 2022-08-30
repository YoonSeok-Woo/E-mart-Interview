import './App.css';
import List from './components/List.js'
import Header from './components/Header.js'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <h4>금주의 전단 상품을 만나보세요.</h4>
      <List></List>
      
    </div>
  );
}

export default App;
