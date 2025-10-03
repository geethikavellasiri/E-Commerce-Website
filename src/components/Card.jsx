import { RiStarSFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa"; 
function Card({img, title,star,reviews,newPrice, prevPrice}) {
    return(
    
    <section className="card-container">
      <section className="card">
      <img src={img} alt={title} className="card-img"
      />
      
        <div className="card-detailes"> 
          <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star}  {star} {star} {star} {/* className="rating-stars" */}
        <span className="total-reviews">{reviews}</span>
    </section>
    <section className="card-price">
      <div className="price">
      <del>{prevPrice}</del> {newPrice}
      </div>
    
    <div className="bag">
      <FaShoppingBag className="bag-icon" />
    </div>
            </section>
          </div>
        </section>
        </section>
    
    )
}

export default Card;