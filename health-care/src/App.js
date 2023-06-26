import './App.css';
import IntroductionContainer from './components/IntroductionContainer/IntroductionContainer';
import LoginContainer from './components/Login/LoginContainer/LoginContainer';
function App() {
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}className="App">

      <IntroductionContainer />
      <LoginContainer />
      
    </div>
  );
}

export default App;
