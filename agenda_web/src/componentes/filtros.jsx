export default function Filtros ({ texto, setTexto, categoria, setCategoria}) {
    return (
        <div>
            <input type="text" 
            placeholder = "Buscar por titulo o lugar"
            value = {texto}
            onChange = { e => setTexto(e.target.value)}
            />

        <select value = {categoria} onChange = {e => setCategoria(e.target.value)}>
            <option>Todas</option>
            <option>Charla</option>
            <option>Taller</option>
            <option>Torneo</option>
            <option>Excursión</option>

        </select>
        </div>
    );
}