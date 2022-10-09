
export default function Card(props){
  return (
    <div className="grid-cards">
      <div className="card-content">
        <img src={props.imgUrl} alt="" className="card-img"></img>
        <a href={props.linkGoogle}><i class="fa-solid fa-map-location"></i></a>
      </div>
    </div>
  )
}
