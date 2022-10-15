import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router'
import './MobilesDetails.css'
import './MobileDetailsResponsive.css'


export default function MobilesDetails({addToCart, addFavourite, theme}) {

  const location = useLocation();

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className='mobiles-details-container'>
        <div className="mobiles-details-box">
          <div className="mobiles-details-img-box">
            <img src={location.state.mobiles.img} alt="" className="mobiles-details-img" />
          </div>
          <div className="mobiles-details-info-box">
            <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}}  className="mobiles-details-top-box">
              <div className="mobiles-details-boxes">
                <span className='names'>Brand</span>
                <span className='info'>{location.state.mobiles.brand}</span>
              </div>
              <div className="mobiles-details-boxes">
                <span className='names'>Model</span>
                <span className='info'>{location.state.mobiles.model}</span>
              </div>
              <div className="mobiles-details-boxes">
                <span className='names'>Color</span>
                <span className='info'>{location.state.mobiles.color}</span>
              </div>
              <div className="mobiles-details-boxes">
                <span className='names'>Type</span>
                <span className='mobiles-details-type info'>{location.state.mobiles.type}</span>
              </div>
              <div className="mobiles-details-boxes">
                <span className='names'>Memory</span>
                <span className='info'>{location.state.mobiles.memory}GB</span>
              </div>
              <div className="mobiles-details-boxes">
                <span className='names'>Price</span>
                <span className='mobiles-details-price info'>${location.state.mobiles.price}</span>
              </div>
            </div>
            <p className='mobiles-details-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo odio magnam voluptate? A accusantium minus eaque quia blanditiis repellendus beatae laborum maiores molestias, dolore suscipit fugit ipsam natus nobis deleniti, est veritatis molestiae, ea facere reprehenderit dolorem inventore quas autem? Beatae ex praesentium incidunt quis error vel cumque, suscipit distinctio accusamus amet, hic eum tempora, itaque labore? Debitis voluptates quibusdam fugiat iusto est architecto, reprehenderit esse iure assumenda? Deleniti enim dolore ullam omnis odio tenetur aut molestiae, at nemo, unde veniam! Sint eos incidunt qui saepe beatae debitis inventore! Excepturi ex omnis nemo id quasi. Natus quas quam laboriosam maiores impedit dolorem accusamus autem ipsa voluptatem veritatis ipsum saepe suscipit sunt reiciendis voluptatibus exercitationem id pariatur itaque dolore, totam iusto soluta sequi ducimus fuga. Praesentium ipsam earum perspiciatis tempore? Blanditiis reprehenderit harum iste itaque nihil consequuntur tenetur eligendi, amet reiciendis, dolorum labore voluptatem quas sequi. Nobis esse exercitationem sequi.
            </p>
            <div className="mobiles-details-button-box">
              <button className='mobiles-details-add-button' onClick={() => addToCart(location.state.mobiles)}>Add To Cart <FaCartPlus/></button>
              <button className='mobiles-details-add-button' onClick={() => addFavourite(location.state.mobiles)}>Add To Favourite <FaHeart/></button>
            </div>
          </div>
        </div>
      </div>
  )
}
