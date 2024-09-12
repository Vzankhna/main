import React, { useContext, useState } from 'react';
import './Product.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import MyContext from '../../Common/Context/Mycontext';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { data, matchNavigate,isProductInCart,handleBuyNowClick,load,Navigate} = useContext(MyContext);
    const { product } = useParams();

    const [sortOrder, setSortOrder] = useState("");
    const sortedProducts = data.map((Item) => {
        const sortedVariants = [...Item.product_container].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "dec") return b.price - a.price;
        if (sortOrder === "rating") return b.rating - a.rating;

        return 0;
        });
        
        return { ...Item, product_container: sortedVariants };
        });
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
      };

    const newdata =  product ?sortedProducts.filter(o => o.product_category_route === product):data

    return (
        <>
        <div className="producgrid">
            <div className="content">
                <div className="pheader">
                    <div className="ptext">
                        <h2>Top Products</h2>
                    </div>
                <div className='filter'>
           <select onChange={handleSortChange}>
           <option selected disabled>Sort by:Filter</option>
           <option value="asc">Price:Low to High</option>
           <option value="dec">Price:High to Low</option>
           <option value="rating">Rating</option>
        </select>       
        </div>
                </div>
            </div>

        <div className="product-listing">
            {
               newdata
               
                    .map((o) =>{
                       return(
                        <>
                        {
                            o.product_container
                            .map((i)=>{
                            return(
                                <>
                               <div className="product-container">
                                  <div className="img">
                                    <img src={i.img} alt="" onClick={() => matchNavigate(o.product_category_route, i.product_route)} />
                                    <div className="overlay">
                                    { 
                          !         isProductInCart(o.id,i.id) ?
                                    <button onClick={()=>handleBuyNowClick(o.id,i.id,i.img,i.name,i.price)}>{load ?'ADDING...':'Add to Cart'}<span style={{ marginLeft: "10px" }}><FaArrowRightLong /></span></button> :
                                    <button onClick={() =>Navigate('/cart')}>Go To Cart </button>
                                    }
                                    </div>
                                </div>
                                <div className="content">
                                    <span>{i.name}</span>
                                        <div className="price">
                                            <button>${i.price}</button>
                                        </div>
                                </div>
                                </div>


                                </>
                            )
                        })
                    }
                 </>
                 )
            })

        }
        </div>
        </div>
 
        </>
    );
}

export default Product;
