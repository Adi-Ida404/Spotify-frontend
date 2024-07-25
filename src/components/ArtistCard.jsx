
export const ArtistCard = (props) => {
  return (
    <div className="p-4 text-black font-Raleway text-left">
        <a href={props.link}></a>
        <img className="rounded-full h-40" src={props.imageUrl} alt=""/>
        <h4 className="mt-4 mb-2 font-semibold">{props.name}</h4>
        <h5>Artist</h5>
    </div>
  )
}
