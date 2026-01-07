import { useState} from "react";
import Tarjetas from "./tarjetas";
import Filtros from "./filtros";

export default function ListaEventos ({ eventos, onSelect}) {
    const [texto, setTexto] = useState("");
    const [categoria, setCategoria] = useState("Todas");

    const filtrados = eventos.filter(e => {
        const textoIgual = 
        e.titulo.toLowerCase().includes(texto.toLowerCase()) ||
        e.lugar.toLowerCase().includes(texto.toLowerCase());

        const categoriaIgual = 
        categoria === "Todas" || e.categoria === categoria;

        return textoIgual && categoriaIgual;
    })

    return (
        <>

        <Filtros
        texto = {texto}
        setTexto = {setTexto}
        categoria = {categoria}
        setCategoria = {setCategoria}
        />

        <p>Mostrando {filtrados.length} de {eventos.length} eventos</p>

        {
            filtrados.map(evento => (
                <Tarjetas
                key = {evento.id}
                evento = {evento}
                onSelect = {onSelect}
                />

            ))}
            </>
        );
}