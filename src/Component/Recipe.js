import React, { useState, useEffect } from 'react'
import '../Component/Recipe.css'
import Cards from './Cards'
import axios from 'axios'
export default function Recipe() {
    const [Data, setData] = useState([])
    const [User, setUser] = useState()
     

    useEffect(() => {
        axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=gulab-jamun&app_id=422bd884&app_key=58fcce59f62f9e39577bfb858bf32391')
            .then(response => response.data)
            .then(res => {
                setData(res.hits)

                // console.log(res)
            })


    }, [])

    const UserData = (e) => {
        setUser(e.target.value)
    }

    const DataShow = (e) => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${User}&app_id=422bd884&app_key=58fcce59f62f9e39577bfb858bf32391`)
            .then(response => response.data)
            .then(res => {
                setData(res.hits)
                console.log(Data)
            })
    }

    return (
        <>
            <div className='row'>
                <div className='row bg-dark'> 
                        
                    <div className='search m-auto'>
                        <input className='my-2' onChange={UserData} type="text" placeholder='Search Recipe Name' />
                        <button onClick={DataShow} className='ms-2'>Search</button>
                    </div>
                     
                </div> 
                     <Cards data={Data} />
            </div>  
        </>
    )
}
