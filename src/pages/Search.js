import React,{ useContext } from 'react'
import './style.css'
import {ContextData} from '../common/Menu'

function Search() {
 const  data1 = useContext(ContextData)
    console.log(data1);
  return (
    <>
      
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
        {data1 ? <tbody>
          {data1.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td><audio controls src={item.song} /></td>
                <td>{item.title}</td>
                <td>{item.singer}</td>
                <td>{item.lyrics}</td>
                <td>{item.music}</td>
              </tr>


            )

          })}



        </tbody> : <p>no data</p>}
      </table>

    </>
  )
}

export default Search