
import { Box, Container } from '@mui/material';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import BmiPage from './pages/bmi Page/BmiPage';

function App() {
  return (
    <Container>
      <Box>
        <BrowserRouter>
        <div>
          <Routes>
            <Route path="*" element="Page not exist 404"/>
            <Route path="/" element={<BmiPage/>}></Route>
          </Routes>
        </div>
        </BrowserRouter>
      </Box>
    </Container>
  );
}

export default App;
