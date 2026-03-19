export default function Button({ onClick, text,color }) {
    return (
        <button onClick={onClick} className={`${color}`}>
            {text}
        </button>
    )
}