export default function Tarjetas ({ evento, onSelect}) {
    return (
        <div className = "contenedor">
    <div className = "tarjetas">

        <h3>{evento.titulo}</h3>
        <p>{evento.categoria} | {evento.fecha}</p>
        <p>{evento.lugar}</p>
        <button onClick = {() => onSelect(evento)}>Ver Detalle</button>
    </div>
    </div>
    );
}