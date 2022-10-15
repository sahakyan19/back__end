import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router';
import './ItemsDetails.css'
import './ItemsDetailsResponsive.css'


export default function ItemsDetails({item, addToCart, addFavourite, theme}) {

  const location = useLocation()

  return (
    <>
      <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className='all-items-view-container'>
        <div className="all-items-view-box">
          <div className="all-items-view-img-box">
            <img src={location.state.product.img} alt="" className="all-items-view-img" />
          </div>
          <div className="all-items-view-info-box">
            <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}}  className="all-items-view-info-top-box">
                <div className="all-items-view-info-boxes">
                  <span className='names'>Brand</span>
                  <span className='info'>{location.state.product.brand}</span>
                </div>
                <div className="all-items-view-info-boxes">
                  <span className='names'>Model</span>
                  <span className='info'>{location.state.product.model}</span>
                </div>
                <div className="all-items-view-info-boxes">
                  <span className='names'>Color</span>
                  <span className='info'>{location.state.product.color}</span>
                </div>
                <div className="all-items-view-info-boxes">
                  <span className='names'>Type</span>
                  <span className='all-items-view-type info'>{location.state.product.type}</span>
                </div>
                {
                  location.state.product.memory === undefined 
                  ?
                  null
                  :
                  <div className="all-items-view-info-boxes">
                    <span className='names'>Memory</span>
                    <span className='info'>{location.state.product.memory}GB</span>
                  </div>
                }
                <div className="all-items-view-info-boxes">
                  <span className='names'>Price</span>
                  <span className='all-items-view-price info'>${location.state.product.price}</span>
                </div>
            </div>
            <p className='all-items-view-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo odio magnam voluptate? A accusantium minus eaque quia blanditiis repellendus beatae laborum maiores molestias, dolore suscipit fugit ipsam natus nobis deleniti, est veritatis molestiae, ea facere reprehenderit dolorem inventore quas autem? Beatae ex praesentium incidunt quis error vel cumque, suscipit distinctio accusamus amet, hic eum tempora, itaque labore? Debitis voluptates quibusdam fugiat iusto est architecto, reprehenderit esse iure assumenda? Deleniti enim dolore ullam omnis odio tenetur aut molestiae, at nemo, unde veniam! Sint eos incidunt qui saepe beatae debitis inventore! Excepturi ex omnis nemo id quasi. Natus quas quam laboriosam maiores impedit dolorem accusamus autem ipsa voluptatem veritatis ipsum saepe suscipit sunt reiciendis voluptatibus exercitationem id pariatur itaque dolore, totam iusto soluta sequi ducimus fuga. Praesentium ipsam earum perspiciatis tempore? Blanditiis reprehenderit harum iste itaque nihil consequuntur tenetur eligendi, amet reiciendis, dolorum labore voluptatem quas sequi. Nobis esse exercitationem sequi.
              </p>
            <div className="items-details-button-box">
              <button className='items-details-add-button' onClick={() => addToCart(location.state.product)}>Add To Cart <FaCartPlus/></button>
              <button className='items-details-add-button' onClick={() => addFavourite(location.state.product)}>Add To Favourite <FaHeart/></button>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

