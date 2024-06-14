import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const[data,setData]=useState([]);

    const {name}=useParams()
    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`).then(response=>response.json()).then(data=>setData(data))
    },[name])
    console.log(data)
  return (<>
  <img src={data.avatar_url} alt="img" />
    <div className='text-center m-4 bg-gray-800 text-white p-4  text-3xl'>github followers: {data.followers}</div>
    </>
  )
}

export default Github