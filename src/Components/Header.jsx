import React from 'react'


const Header = () => {
  return (
    <header className='w-100 navbar navbar-dark bg-dark text-light justify-content-around'>
      <div id='logo-pesq' className='d-flex gap-5 w-50 justify-content-between'>
        <div role='button' className='d-flex align-items-center'>
          <i className='bi bi-controller fs-1 me-3'></i>
          <span className='navbar-brand fw-bold fs-3'>DevSteam</span>
        </div>
        <input type="text" placeholder='Buscar...' className='w-100 d-none d-md-block border-0 rounded-1 buscar px-4 my-2'/>
      </div>
      <div role='button' id="carrinho">
        <i className='bi bi-cart4 accordion text-light fs-2'></i>
      </div>
    </header>
  )
}

export default Header