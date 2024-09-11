import React, { useContext} from 'react';
import './Singleproduct.scss';
import { useParams } from 'react-router-dom';
import MyContext from '../../Common/Context/Mycontext';

const Singleproduct = () => {
  const { data, handlehover, selectedSize, handleBuyNowClick, handleSizeClick, error } = useContext(MyContext);
  const { singleproduct, product } = useParams();

  return (
    <div className="singleproduct">
      {data?.filter(p => p.product_category_route === product)
        .map((p) => {
          return (
            <>
              {p.product_container?.filter(a => a.product_route === singleproduct)
                .map((a) => {
                  return (
                    <>
                      <div className="big-img">
                        <img src={a.img} alt="" id='change' />
                      </div>

                      <div className="smallimg">
                        {a.sideimg?.map((d) => {
                          return (
                            <img
                              key={d.sideimg}
                              src={d.sideimg}
                              id='image'
                              onMouseOver={() => handlehover(d.sideimg)}
                              alt=""
                            />
                          )
                        })}
                      </div>
                      <div className="content">
                        <div className="product-title">{a.name}</div>

                        <div className="product-price">
                          <span>${a.price}</span>
                          <span>${a.deleted_price}</span>
                        </div>
                        <p>{a.description}</p>
                        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Stock:</p>
                        <p>{a.stock}</p>

                        <div className="size">
                          <h4>Size:</h4>
                          {a.size?.map((s) => {
                            return (
                              <span style={{backgroundColor:s.size===selectedSize && "black", color:s.size===selectedSize && "yellow"}}
                                key={s.size}
                                className='selected'
                                onClick={() => handleSizeClick(s.size)}>
                                {s.size}
                              </span>
                            )
                          })}
                        </div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <div className="btn">
                          <button onClick={()=>handleBuyNowClick(p.id,a.id,a.img,a.name,a.price)}>Buy Now</button>
                        </div>
                      </div>
                    </>
                  )
                })}
            </>
          )
        })}
    </div>
  )
};

export default Singleproduct;