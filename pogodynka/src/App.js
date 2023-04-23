import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/SearchBox/Search'

function App() {


  return (

<div class="container-fluid d-flex justify-content-center align-items-center">
  <div class="hero-box rounded-5 mask">
    <div class="row g-0">
        <div class="col-md-12 text-center header">
          <h1 class="mt-2"><span class="logo-color">Pogo</span>dynka</h1>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="section-left pt-2 ps-2">
            <p><Search /></p>
          </div>
        </div>
        <div class="col-md-9 col-sm-6">
          <div class="section-right pt-2 ps-2">
            <p></p>
          </div>
        </div>
      </div>
  </div>
</div>
  );
}

export default App;