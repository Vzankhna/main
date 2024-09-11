import React from 'react'
import './Homedecoration.scss'
import hd from '../../assets/hd.png'
import hd1 from '../../assets/hd1.png'
import hd2 from '../../assets/hd2.png'
import hd3 from '../../assets/hd3.png'
import hd4 from '../../assets/hd4.png'
import hd5 from '../../assets/hd5.png'
import hd6 from '../../assets/hd6.png'
import hd7 from '../../assets/hd7.png'
import hd8 from '../../assets/hd8.png'
const Homedecoration = () => {
  return (
    <div className="homedecoration">
        <div className="hdtext">
            <p>Design inspiration and modern home ideas</p>
        </div>
        <div className="allbutton">
            <button>All</button>
            <button>BedRoom</button>
            <button>Living Room</button>
            <button>Kitchen</button>
            <button>WorkSpace</button>
            <button>Outdoor</button>
            <button>Bathroom</button>
            <button>Home Office</button>
            <button>Dinein</button>
        </div>
        <div className="hdimage">
            <img src={hd} alt="" />
            <img src={hd1} alt="" />
            <img src={hd2} alt="" />
            <img src={hd3} alt="" />
            <img src={hd4} alt="" />
            <img src={hd5} alt="" />
            <img src={hd6} alt="" />
            <img src={hd7} alt="" />
            <img src={hd8} alt="" />
        </div>
        <div className="dshow">
            <p>Showing 9 of 16 results</p>
            <button>Show More</button>
        </div>
    </div>
  )
}

export default Homedecoration
