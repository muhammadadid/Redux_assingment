
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themSlice';


const Card = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const cardStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    
    <div style={cardStyle}>
      <h2>HALLO</h2>
      <p>Selamat Datang!,Di bawah adalah tombol untuk merubah mode.</p>
      <button onClick={() => dispatch(toggleDarkMode())} style={{ color: darkMode ? '#fff' : '#000', backgroundColor: darkMode ? '#000' : '#fff',borderRadius: '10px', border: darkMode ? '1px solid #fff' : '1px solid #000'  }}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Card;
