import './App.css';
import Container from './component/Container';
import {ThemeProvider} from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
      
  );
}

export default App;
