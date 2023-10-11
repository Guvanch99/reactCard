import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import React from 'react'
import { Home } from './features/home'
import { Card } from './features/card'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route index element={<Home/>}/>
      <Route path="/card" element={<Card/>}/>
    </RouterRoutes>
  </BrowserRouter>
)

export default Routes
