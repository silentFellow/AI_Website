import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'

const PrivateRouteForAdmin = () => {
  const [cookies, _] = useCookies(["AdminForAIWebsiteKEC"]);
  return (
    cookies.AdminForAIWebsiteKEC !== "undefined" ? <Outlet /> : <Navigate to='/admin/login' />
  )
}

const PrivateRouteForLogin = () => {
  const [cookies, _] = useCookies(["AdminForAIWebsiteKEC"]);
  return (
    cookies.AdminForAIWebsiteKEC === "undefined"  ? <Outlet /> : <Navigate to='/admin/details' />
  )
}

export {
  PrivateRouteForAdmin, 
  PrivateRouteForLogin 
}