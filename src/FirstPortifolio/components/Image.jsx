export default function Image({src,alt,estilo}) {
    return(
        <img src={src} alt={alt} className={`border border-blue-900 shadow-xl shadow-indigo-500/50 object-cover ${estilo}`}/>
    )
}