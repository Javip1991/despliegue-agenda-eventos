import { useEffect, useState } from 'react';
import ListaEventos from "./componentes/listaEventos";
import DetallesEventos from "./componentes/detallesEventos";
import Favoritos from "./componentes/favoritos";
import Eventos from "./data/eventos.json";

function App() {

  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (!Eventos || Eventos.length === 0) {
          throw new Error("No hay eventos disponibles");
        }
        setEventos(Eventos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }, 1000);
  }, []);

  const anadirFav = (evento) => {
    if (!favoritos.find(f => f.id === evento.id)) {
      setFavoritos([...favoritos, evento]);
    }
  };

  const quitarFav = (id) => {
  setFavoritos(prevFavoritos => prevFavoritos.filter(f => f.id !== id));
  };

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Agenda de Eventos</h1>

      <Favoritos favoritos={favoritos} quitarFav={quitarFav} />

      {!seleccionado ? (
        <ListaEventos
          eventos={eventos}
          onSelect={setSeleccionado}
        />
      ) : (
        <DetallesEventos
          evento={seleccionado}
          volver={() => setSeleccionado(null)}
          anadirFav={anadirFav}
          esFav={favoritos.some(f => f.id === seleccionado.id)}
        />
      )}
    </div>
  );
}

export default App;
