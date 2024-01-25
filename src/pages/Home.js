import React from 'react'

function Home() {
  return (
   <>

<div className='row'>
    <div className='left col-sm-12 col-md-6 col-lg-4 col-xl-3 p-1 '>
    <ul class="list-group text-center">
  <button class="list-group-item active" aria-current="true">Old songs</button>
  <button class="list-group-item">1970's</button>
  <button class="list-group-item">1980's</button>
  <button class="list-group-item">1990's</button>
  <button class="list-group-item">After 2000</button>
</ul>
<ul class="list-group mt-2 text-center">
  <button class="list-group-item active" aria-current="true">Categories</button>
  <button class="list-group-item">Bollywood</button>
  <button class="list-group-item">Hollywood</button>
  <button class="list-group-item">Punjabi</button>
  <button class="list-group-item">Tollywood</button>
</ul>
<ul class="list-group mt-2 text-center">
  <button class="list-group-item active" aria-current="true">Devotional Songs</button>
  <button class="list-group-item">Arties</button>
  <button class="list-group-item">Desh Bhakti</button>
  <button class="list-group-item">Bhajans</button>
  <button class="list-group-item">Guru Vani</button>
</ul>


    </div>
    <div className='right col-sm-12 col-md-6 col-lg-8 col-xl-9 p-3'></div>
  </div>

   </>
  )
}

export default Home