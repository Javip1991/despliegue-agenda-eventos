export default function Favoritos({ favoritos, quitarFav }) {
  if (favoritos.length === 0) return <p>No hay favoritos</p>;

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favoritos.map(f => (
          <li key={f.id}>
            {f.titulo}{" "}
            <button onClick={() => quitarFav(f.id)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
