import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {product}  = useSelector(state=>state.product)

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to={"/"} class="navbar-brand" href="#" style={{width: "25%"}}>Logo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between" style={{width:"45%"}}>
        <Link to={"/"} class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </Link>
        <Link to={"coursespage"} class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Courses</a>
        </Link>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Services</a>
        </li>
       
       
       
      </ul>
      <Link to={"addtocardpage"} class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cart({product.length})</a>
        </Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar