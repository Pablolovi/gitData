import React from 'react';
import '../styles/UserCard.css';  // Ruta correcta al CSS

function UserCard({ userData }) {
  if (!userData) return null;  // Asegúrate de que userData no sea nulo

  const { name, login, followers, public_repos, avatar_url } = userData;

  return (
    <div className="user-card">
      <img src={avatar_url} alt={login} className="user-avatar" />
      <h2 className="user-name">{name || login}</h2> {/* Si no tiene nombre, mostramos el login */}
      <p className="user-username">@{login}</p>
      <p className="user-followers">Seguidores: {followers}</p>
      <p className="user-repos">Repositorios públicos: {public_repos}</p>
    </div>
  );
}

export default UserCard;
