export default function DetallesEventos ({ evento, volver, anadirFav, esFav}) {
    return (
        <div>
            <h2>{evento.titulo}</h2>
            <p><strong>Categoría:</strong> {evento.categoria}</p>
            <p><strong>Fecha: </strong> {evento.fecha}</p>
            <p><strong>Lugar: </strong> {evento.lugar}</p>
            <p>{evento.descripcion}</p>

            <button onClick = {volver}>Volver</button>

            <button onClick = {() => anadirFav(evento)}
                disabled = {esFav}   
                >

            {esFav ? "En favoritos" : "Añadir a favoritos"}
            </button>
        </div>
    );
}