import React from 'react'
import './Admin.css'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../../Componens/AddProduct/AddProduct'
import Sidebar from '../../Componens/Sidebar/Sidebar'
import ListProduct from '../../Componens/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin