
import { useSelector } from 'react-redux';
import Card from './components/Card';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#f0f0f0',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <Card />
    </div>
  );
};

export default App;
