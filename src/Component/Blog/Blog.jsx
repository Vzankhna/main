import React from 'react'
import './Blog.scss';
import blog from '../../assets/blog.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'
import blog5 from '../../assets/blog5.png'
import blog6 from '../../assets/blog6.png'
const Blog = () => {
  return (
    <div className="blog">
        <div className="bloghead">
            <h2>Transforming Your Living Space: Top Trends in Modern Furniture</h2>
            <p>Explore the latest trends in modern furniture design that can elevate your living space with style and functionality</p>
            <button>Read Article</button>
        </div>
        <div className="blogimage">
            <img src={blog} alt="" />
        </div>
        <div className="blogarticle">
            <p>Latest Article</p>
        <div className="barticle">
        <div className="artcle1">
            <img src={blog1} alt="" />
            <p>The Art of Minimalism: How to Achieve a Sleek Look</p>
            <p>Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.</p>
            <button>Interior Design</button>
        </div>
        <div className="artcle2">
            <img src={blog2} alt="" />
            <p>Choosing the Perfect Sofa: A Guide to Style and Comfort</p>
            <p>Learn how to select the ideal sofa that balances style, comfort, and durability for your living room.</p>
            <button>Interior Design</button>
        </div>
        <div className="artcle3">
            <img src={blog3} alt="" />
            <p>Sustainable Furniture: Eco-Friendly Choices for a Modern Home</p>
            <p>Dive into sustainable furniture options that are both stylish and environmentally friendly</p>
            <button>Interior Design</button>
        </div>
        <div className="artcle4">
            <img src={blog4} alt="" />
            <p>Maximizing Small Spaces: Innovative Furniture Solutions</p>
            <p>Find out how to make the most of small living spaces with innovative and space-saving furniture designs.</p>
            <button>Interior Design</button>
        </div>
        <div className="artcle5">
            <img src={blog5} alt="" />
            <p>Mixing and Matching: Creating Harmony with Different Styles</p>
            <p>Get insights on how to blend various furniture styles to create a harmonious and visually appealing interior.</p>
            <button>Interior Design</button>
        </div>
        <div className="artcle6">
            <img src={blog6} alt="" />
            <p>Accent Pieces that Pop: Adding Character to Your Home</p>
            <p>Discover the power of accent pieces and how they can add character and personality to your modern home.</p>
            <button>Interior Design</button>
        </div>
        </div>
        </div>
        <div className="sarticle">
            <button>Show all articles</button>
        </div>
    </div>
  )
}

export default Blog
