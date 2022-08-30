
import { faHeart,faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
function Item(props){
  const ItemBox = styled.div`
    display:flex;
    width:420px;
    height:130px;
    margin-bottom:10px;
  `;
  const LeftImage = styled.span`
    width:140px;
    height:130px;
  `;
  const ItemImage = styled.img`
    width:140px;
    height:130px;
    overflow:hidden;
  `;
  const RightInfo = styled.div`
    width:280px;
    padding:5px;
  `;
  const Price = styled.div`
    display:flex;
    align-items: center;
    height:20px;
  `
  const OriginalPrice = styled.p`
    text-decoration: line-through;
    color:gray;
    margin:0px;
    margin-right:5px;
    font-size:15px;
  `
  const DiscountPrice = styled.p`
    font-size:20px;
    font-weight:bold;
    margin:0px;
  `
  const DiscountTag = styled.span`
    border-style:solid;
    border-radius:5px;
    font-size:10px;
    padding:1px;
    margin:1px;
    color:red;
    border-width:1px;
    border-color:red;
  `
  const CommentBox = styled.div`
    display:flex;
    margin-top:10px;
    align-items: center;
  `
  const Comments = styled.div`
    margin-left: 50px;
  `
  const CommentNumbers = styled.span`
    margin-left: 10px
  `
  const InfoContent = styled.p`
    margin:3px;
  `

  const discountTags =()=>{
    var res = []
    var additionalDiscount = props.item.additionalDiscount
    if(additionalDiscount){
      additionalDiscount.forEach(function(discountTag){
        res.push(<DiscountTag>{discountTag}</DiscountTag>)
      })
    }
    return res

  }
  return (
    <ItemBox>
      <LeftImage>
        <ItemImage src={props.item.image}></ItemImage>
      </LeftImage>
      <RightInfo>
        <Price>
          <OriginalPrice>{props.item.price}</OriginalPrice>
          <DiscountPrice>{props.item.discountPrice}</DiscountPrice>
        </Price>
        <InfoContent>{props.item.itemName}</InfoContent>
        {discountTags()}
        <CommentBox>
          <span>
            <FontAwesomeIcon icon={faHeart} /> 
            <CommentNumbers>{props.item.likes}</CommentNumbers>
          </span>
          <Comments>
            <FontAwesomeIcon icon={faComment} />
            <CommentNumbers>{props.item.comments}</CommentNumbers>
          </Comments>

        </CommentBox>
        
      </RightInfo>
      
    </ItemBox>
    
  )
}export default Item;