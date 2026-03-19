export default function Tech({ text, atributos }) {
    return(
        <span className={`${atributos}`}>
            {text}
        </span>
    )
}