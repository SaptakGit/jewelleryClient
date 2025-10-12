import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './coponents/Layout'
import Home from './coponents/home/Home'
import Product from './coponents/product/ProductList'
import Productdetail from './coponents/product/ProductDetail'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import CheckAuth from './middlewares/CheckAuth'
import WishList from './coponents/wishlist/WishList'
import MyCart from './coponents/cart/MyCart'
import Order from './coponents/order/Order'
import Profile from './coponents/users/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        { path: '/', element: <CheckAuth><Home/></CheckAuth> },
        { path: '/profile', element: <CheckAuth><Profile/></CheckAuth> },
        { path: '/products', element: <CheckAuth><Product/></CheckAuth> },
        { path: '/productdetails', element: <CheckAuth><Productdetail/></CheckAuth> },
        { path: '/wishlist', element: <CheckAuth><WishList/></CheckAuth> },
        { path: '/mycart', element: <CheckAuth><MyCart/></CheckAuth> },
        { path: '/order', element: <CheckAuth><Order/></CheckAuth> }
      ]
    }
  ]) 

  return (
    <Provider store={appStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
