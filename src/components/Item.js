import './Item.css'
import { faHeart,faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Item(props){
  const discountTags =()=>{
    var res = []
    var additionalDiscount = props.item.additionalDiscount
    
    if(additionalDiscount){
      additionalDiscount.forEach(function(discountTag){
        res.push(<span className="discountTag">{discountTag}</span>)
      })
    }
    return res

  }
  return (
    <div className="Item">
      <span className="leftImage">
        <img className="itemImage" src={props.item.image}></img>
      </span>
      <div className="rightInfo">
        <div className="price">
          <p className="originalPrice">{props.item.price}</p>
          <p className="discountPrice">{props.item.discountPrice}</p>
        </div>
        <p className="infoContent">{props.item.itemName}</p>
        {discountTags()}
        <div className="commentBox">
          <span>
            <FontAwesomeIcon icon={faHeart} /> 
            <span className="commentNumbers">{props.item.likes}</span>
          </span>
          <div className="comments">
            <FontAwesomeIcon icon={faComment} />
            <span className="commentNumbers">{props.item.comments}</span>
          </div>

        </div>
        
      </div>
      
    </div>
    
  )
}export default Item;