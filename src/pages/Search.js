import React, { useState } from 'react'
import axios from 'axios'

function Search() {

  let [searchkey, setsearchkey] = useState()
  let [val, setval] = useState()

  let searchUser = (key) => {
    axios.get("http://localhost:3000/Songs?title=" + key).then((res) => {
      // console.log(res.data);
      setval(res.data)

    })
  }
  return (
    <>
      <div className="input-group mb-3 mt-4">
        <input type="text" className="form-control" placeholder="Search Data"
          onChange={(e) => {setsearchkey(e.target.value) }} />
        <span className="input-group-text" ><button className='btn btn-outline-danger'
          onClick={() => {searchUser(searchkey) }}>Search</button></span>
      </div>

      <table class="table">
        <thead>
          <tr className='text-center'>
          <th scope="col">Id</th>
      <th scope="col">Song</th>
      <th scope="col">Title</th>
      <th scope="col">Singer</th>
      <th scope="col">Lyrics</th>
      <th scope="col">Music</th>
          </tr>
        </thead>
        {val?<tbody>
          {val.map((item)=>
          {
            return(
              <tr>
                  <td>{item.id}</td> 
                  <td><audio controls src={item.song}/></td>
                  <td>{item.title}</td> 
                  <td>{item.singer}</td> 
                  <td>{item.lyrics}</td>
                  <td>{item.music}</td>
              </tr>


            )
             
          })}
          
          
          
          </tbody>:<p>no data</p>}
          </table>

      </>
      )
}

      export default Search