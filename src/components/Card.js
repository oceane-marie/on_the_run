
export default function Card(props){
  return (
    <div className={"card-content card-" + props.id}>
      <img src={props.imgUrl} alt="" className="card-img"></img>
      <div className="location-tag">
        <a href={props.linkGoogle}><i class="fa-solid fa-map-location"></i></a>
      </div>
      <h3>{props.startDate} - {props.endDate}</h3>
      <p>{props.description}</p>
    </div>
  )
}
