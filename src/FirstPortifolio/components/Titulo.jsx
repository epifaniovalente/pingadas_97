export default function Titulo({ text, atributos }) {
    return (
        <h2 className={`${atributos}`}>
            {text}
        </h2>
    )
}