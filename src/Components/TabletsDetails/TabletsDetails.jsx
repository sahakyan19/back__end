import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router'
import './TabletsDetails.css'
import './TabletsDetailsResponsive.css'

export default function TabletsDetails({addToCart, addFavourite, theme}) {

  const location = useLocation();

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className='tablets-details-container'>
        <div className="tablets-details-box">
          <div className="tablets-details-img-box">
            <img src={location.state.tablets.img} alt="" className="tablets-details-img" />
          </div>
          <div className="tablets-details-info-box">
            <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}}  className="tablets-details-top-box">
              <div className="tablets-details-boxes">
                <span className='names'>Brand</span>
                <span className='info'>{location.state.tablets.brand}</span>
              </div>
              <div className="tablets-details-boxes">
                <span className='names'>Model</span>
                <span className='info'>{location.state.tablets.model}</span>
              </div>
              <div className="tablets-details-boxes">
                <span className='names'>Color</span>
                <span className='info'>{location.state.tablets.color}</span>
              </div>
              <div className="tablets-details-boxes">
                <span className='names'>Type</span>
                <span className='tablets-details-type info'>{location.state.tablets.type}</span>
              </div>
              <div className="tablets-details-boxes">
                <span className='names'>Memory</span>
                <span className='info'>{location.state.tablets.memory}GB</span>
              </div>
              <div className="tablets-details-boxes">
                <span className='names'>Price</span>
                <span className='tablets-details-price info'>${location.state.tablets.price}</span>
              </div>
            </div>
            <p className='tablets-details-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo odio magnam voluptate? A accusantium minus eaque quia blanditiis repellendus beatae laborum maiores molestias, dolore suscipit fugit ipsam natus nobis deleniti, est veritatis molestiae, ea facere reprehenderit dolorem inventore quas autem? Beatae ex praesentium incidunt quis error vel cumque, suscipit distinctio accusamus amet, hic eum tempora, itaque labore? Debitis voluptates quibusdam fugiat iusto est architecto, reprehenderit esse iure assumenda? Deleniti enim dolore ullam omnis odio tenetur aut molestiae, at nemo, unde veniam! Sint eos incidunt qui saepe beatae debitis inventore! Excepturi ex omnis nemo id quasi. Natus quas quam laboriosam maiores impedit dolorem accusamus autem ipsa voluptatem veritatis ipsum saepe suscipit sunt reiciendis voluptatibus exercitationem id pariatur itaque dolore, totam iusto soluta sequi ducimus fuga. Praesentium ipsam earum perspiciatis tempore? Blanditiis reprehenderit harum iste itaque nihil consequuntur tenetur eligendi, amet reiciendis, dolorum labore voluptatem quas sequi. Nobis esse exercitationem sequi.
            </p>
            <div className="tablet-details-button-details">
              <button className='tablets-details-add-button' onClick={() => addToCart(location.state.tablets)}>Add To Cart <FaCartPlus/></button>
              <button className='tablets-details-add-button' onClick={() => addFavourite(location.state.tablets)}>Add To Favourite <FaHeart/></button>
            </div>
          </div>
        </div>
      </div>
  )
}
