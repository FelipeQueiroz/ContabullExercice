import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { UpdateProfile } from '../pages/UpdateProfile'
import PrivateRoute from './RouteGuard'

export const RenderRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/update" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
