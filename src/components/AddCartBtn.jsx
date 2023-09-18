import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { DataContext } from "../context/cart.context"
import '../assets/style/style.css'
const AddCart = styled.button`
    padding: 10px 15px;
    border: 1px solid #151515;
    background-color: #151515;
    color: #fff;
    transition: all .3s;
    margin-right: 20px;
    cursor: pointer;
    &:hover{
        background: #A63F3F;
        color: #fff;
        border: 1px solid #A63F3F;
    }
`;

export const AddCartBtn = ({precio, nombre, id, img, author}) =>{
    const {cartInfo, setCart} = useContext (DataContext)
    
    const addCarts =(id)=>{
        
            setCart([...cartInfo,{ img:img, precio:precio, nombre:nombre, id: id, author: author}])
            console.log(cartInfo);

    }
    
    return(
            <Link onClick={()=>{addCarts(id)}}className="addCartLink" to='/cart'><AddCart >Add to Cart</AddCart></Link>
    )
}