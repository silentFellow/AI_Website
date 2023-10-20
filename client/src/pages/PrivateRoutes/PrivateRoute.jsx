import { Outlet, Navigate } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie'

const PrivateRouteForAdmin = () => {
  const [cookies, _] = useCookies(["user"]);
  return (
    cookies.user != undefined ? <Outlet /> : <Navigate to='/admin/login' />
  )
}

const PrivateRouteForLogin = () => {
  const [cookies, _] = useCookies(["user"]);
  console.log(Cookies)
  return (
    cookies.user == 'undefined'  ? <Outlet /> : <Navigate to='/admin/details' />
  )
}

export {
  PrivateRouteForAdmin, 
  PrivateRouteForLogin 
}