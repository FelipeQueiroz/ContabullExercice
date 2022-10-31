import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const token = localStorage.getItem('auth')
  return token ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
