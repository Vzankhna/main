import React, { useContext } from 'react';
import './Category.scss';
import { FaArrowRight } from "react-icons/fa6";
import MyContext from '../../Common/Context/Mycontext';

const Category = () => {
  const { data, handleNavigate } = useContext(MyContext);

  return (
    <div className="category">
      <div className="categorytext">
        <p>Categories</p>
      </div> <br />
      {data.map((o) => (
        <div key={o.id} className="categorycontainer">
          <img src={o.img} alt={o.product_category} onClick={() => handleNavigate(o.product_category_route)} />
          <div className="name">
            <p>{o.product_category}</p>
            <button onClick={() => handleNavigate(o.product_category_route)}>
              Shop Now <FaArrowRight style={{ marginLeft: "20px" }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;