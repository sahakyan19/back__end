import { Routes, Route, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { DATA } from './DATA/DATA'
// import { MOBILE_DATA } from './DATA/MOBILES_DATA'
import { TABLET_DATA } from './DATA/TABLETS_DATA'
import { ACCESSORIES_DATA } from './DATA/ACCESSORIES_DATA'
import Layouts from './Components/Layouts'
import FavouritesComponent from './pages/Favourite/FavouritesComponent'
import CartComponent from './pages/Cart/CartComponent'
import Modal from './Components/Modal/Modal'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import ItemsComponent from './Components/All Items/ItemsComponent'
import ItemsDetails from './Components/All Items/ItemsDetails'
import MobileComponent from './Components/Mobiles/MobileComponent'
import TabletComponent from './Components/Tablets/TabletComponent'
import AccessoriesComponent from './Components/Accessories/AccessoriesComponent'
import MobilesDetails from './Components/MobilesDetails/MobilesDetails'
import TabletsDetails from './Components/TabletsDetails/TabletsDetails'
import AccessoriesDetails from './Components/AccessoriesDetails/AccessoriesDetails'
import axios from "axios";
import './App.css'


function App() {

  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);
  const [inpVal, setInpVal] = useState('');
  const [product, setProduct] =useState([...DATA]);
  const [staticProduct, setStaticProduct] = useState([...DATA]);
  const [mobile, setMobile] = useState([])
  const [staticMobile, setStaticMobile] = useState([])
  const [tablet, setTablet] = useState([...TABLET_DATA])
  const [staticTablet, setStaticTablet] = useState([...TABLET_DATA])
  const [accessorie, setAccessorie] = useState([...ACCESSORIES_DATA])
  const [staticAccessorie, setStaticAccessorie] = useState([...ACCESSORIES_DATA])
  const [modalActive, setModalActive] = useState(false);
  const [theme, setTheme] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  async function getMobiles() {
    const response = await axios.get(`http://localhost:8000/api/mobiles`  );
    await setMobile(response.data)
}

useEffect(() => {
    getMobiles()
},[])

  useEffect(()=>{
    let type = searchParams.get('id');
  if(type){
    setMobile(mobile.filter((item) => item.model.toLowerCase().includes(type)))
    console.log(type);
  }
  },[])


  const changeTheme = () => {
    setTheme(!theme);
  }


  const openModal = () => {
    setShowModal(!showModal)
    setModalActive(!modalActive)
  }


  const clickToSearchAll = useCallback(() => {
    setProduct(staticProduct.filter((item) => item.model.toLowerCase().includes(inpVal)))
    setInpVal('')
    setSearchParams({key:inpVal})
  }, [inpVal, setInpVal])

  const clickToSearchMobile = useCallback(() => {
    setMobile(mobile.filter((item) => item.model.toLowerCase().includes(inpVal)))
    setInpVal('')
    setSearchParams({key:inpVal})
  }, [inpVal, setInpVal])

  const clickToSearchTablet = useCallback(() => {
    setTablet(staticTablet.filter((item) => item.model.toLowerCase().includes(inpVal)))
    setInpVal('')
    setSearchParams({key:inpVal})
  }, [inpVal, setInpVal])

  const clickToSearchAccessorie = useCallback(() => {
    setAccessorie(staticAccessorie.filter((item) => item.model.toLowerCase().includes(inpVal)))
    setInpVal('')
    setSearchParams({key:inpVal})
  }, [inpVal, setInpVal])

  const addFavourite = useCallback((items) => {
    const PRODUCT_EXIST = fav.find((item) => item.id === items.id)
    if (PRODUCT_EXIST) {
      setFav(fav.map((item) => item.id === items.id ?
        {...PRODUCT_EXIST} : item))
    } else {
      setFav([...fav, {...items, quantity: 1}])
    }
  }, [fav, setFav])

  const deleteFavourite = useCallback((product) => {
    setFav(fav.filter((item) => item.id !== product.id))
  }, [fav, setFav])

  const addToCart = useCallback((product) => {
    const PRODUCT_EXIST = cart.find((item) => item.id === product.id);
    if (PRODUCT_EXIST) {
      setCart(cart.map((item) => item.id === product.id ?
        {...PRODUCT_EXIST, count: PRODUCT_EXIST.count - 1, quantity: PRODUCT_EXIST.quantity + 1} : item),
      )
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }, [cart, setCart])

  const removeCart = useCallback((product) => {
    const PRODUCT_EXIST = cart.find((item) => item.id === product.id);
    if (PRODUCT_EXIST.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(cart.map((item) => item.id === product.id ? {...PRODUCT_EXIST, count: PRODUCT_EXIST.count + 1, quantity: PRODUCT_EXIST.quantity - 1} : item))
    }
  }, [cart, setCart])

  const clearFav = useCallback(() => {
    setFav([])
  }, [fav, setFav])

  const clearCart = useCallback(() => {
    setCart([])
  }, [cart, setFav])

  return (
    <div className="main-web-page">
      <div className={modalActive ? 'container-modal' : 'container'}>
        <div className="main-container">
          {
            showModal ? <Modal theme={theme} showModal={showModal} setShowModal={setShowModal} modalActive={modalActive} setModalActive={setModalActive} /> : null
          }
          <Routes>
            <Route path='/' element={<Layouts fav={fav} cart={cart} openModal={openModal} theme={theme} changeTheme={changeTheme}/>}>
              <Route path='/' element={<Home theme={theme}/>}/>
              <Route path='/favourites' element={<FavouritesComponent
                fav={fav}
                deleteFavourite={deleteFavourite}
                clearFav={clearFav}
                theme={theme}
                />}
              />
              <Route path='/cart' element={<CartComponent
                cart={cart}
                addToCart={addToCart}
                removeCart={removeCart}
                clearCart={clearCart}
                theme={theme}
                />}
              />
              <Route path='/shop/all-products' element={<ItemsComponent
                addToCart={addToCart}
                product={product}
                inpVal={inpVal}
                setInpVal={setInpVal}
                clickToSearchAll={clickToSearchAll}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/shop/all-products/product' element={<ItemsDetails 
                addToCart={addToCart}
                addFavourite={addFavourite}
                theme={theme}
                product={product}
                />}
              />
              <Route path='/shop/mobiles' element={<MobileComponent
                addToCart={addToCart}
                mobile={mobile}
                inpVal={inpVal}
                setInpVal={setInpVal}
                clickToSearchMobile={clickToSearchMobile}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/shop/mobiles/mobile' element={<MobilesDetails
                addToCart={addToCart}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/shop/tablets' element={<TabletComponent
                addToCart={addToCart}
                tablet={tablet}
                inpVal={inpVal}
                setInpVal={setInpVal}
                clickToSearchTablet={clickToSearchTablet}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/shop/tablets/tablet' element={<TabletsDetails
                addToCart={addToCart}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/shop/accessories' element={<AccessoriesComponent
                addToCart={addToCart}
                accessorie={accessorie}
                inpVal={inpVal}
                setInpVal={setInpVal}
                clickToSearchAccessorie={clickToSearchAccessorie}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/shop/accessories/accessorie' element={<AccessoriesDetails
                addToCart={addToCart}
                addFavourite={addFavourite}
                theme={theme}
                />}
              />
              <Route path='/about' element={<About theme={theme}/>}/>
              <Route path='*' element={<Error theme={theme}/>}/>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
