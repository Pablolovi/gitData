import React from 'react';
import './styles/App.css';  // Importación de los estilos globales
import { useSelector, useDispatch } from 'react-redux';
import { setUserData, setLoading, setError, setUsername } from './redux/userSlice';
import SearchInput from './components/SearchInput';
import Button from './components/Button';
import UserCard from './components/UserCard';

function App() {
  const dispatch = useDispatch();
  const { username, userData, loading, error } = useSelector(state => state.user);

  const handleSearch = async () => {
    if (!username) return;
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      dispatch(setUserData(data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="app-container">
      <h1>Buscador de usuario GitHub</h1>
      <SearchInput 
        username={username} 
        onChange={(e) => dispatch(setUsername(e.target.value))} 
      />
      <Button onClick={handleSearch}>Buscar</Button>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && !loading && !error && (
        <UserCard userData={userData} />
      )}
    </div>
  );
}

export default App;
