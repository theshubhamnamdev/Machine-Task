import React from "react";
import logo1 from "../assets/img/react-logo.png";
import logo2 from '../assets/img/angular-bg.png'
import logo3 from '../assets/img/logo3-bg.png'
import { useDispatch, useSelector } from "react-redux";
import {add} from '../features/productSlice'

const Courses = () => {

    const {product} = useSelector((state)=>state.product)

    const dispatch = useDispatch()

        const handleAdd = () =>{
            // let checkpro = [false];
            // checkpro = product.map((val) => {
            //   return val.id === x.id;
            // });
            // if (!checkpro.includes(true)) {
            //   dispatch(add(x));
            // }
            dispatch(add())
        }

  return (
    <>
      <h1 className="text-center py-5">All Courses</h1>

      <div className="container d-flex gap-5 justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={logo1}
            style={{ width: "250px", height: "250px" }}
            class="card-img-top p-4"
            alt="..."
          />
          <div class="card-body d-flex flex-column justify-content-between text-center">
            <h5 class="card-title">React</h5>
            <p class="card-text">
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
            </p>
            <a href="#" class="btn btn-primary" onClick={handleAdd}>
             Buy Now
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img
            src={logo2}
            style={{ width: "250px", height: "250px" }}
            class="card-img-top p-4"
            alt="..."
          />
          <div class="card-body d-flex flex-column justify-content-between text-center">
            <h5 class="card-title">Angular</h5>
            <p class="card-text">
            AngularJS is a JavaScript MVC framework developed by Google that lets you build well structured, easily testable, and maintainable front-end applications.
            </p>
            <a href="#" class="btn btn-primary" onClick={handleAdd}>
              Buy Now
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={logo3}
            style={{ width: "250px", height: "250px" }}
            class="card-img-top p-4"
            alt="..."
          />
          <div class="card-body  d-flex flex-column justify-content-between text-center">
            <h5 class="card-title">Node.js</h5>
            <p class="card-text">
            Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.
            </p>
            <a href="#" class="btn btn-primary" onClick={handleAdd}>
             Buy Now
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Courses;
