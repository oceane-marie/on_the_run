
export default function Card(props){
  return (
    <div className="grid-cards">
      <div className="card-content">
        <img src={props.imgUrl} alt="" className="card-img"></img>
        <div className="location-tag">
          <a href={props.linkGoogle}><i class="fa-solid fa-map-location"></i></a>
        </div>
        <p>{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
