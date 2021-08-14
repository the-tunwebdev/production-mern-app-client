import React,{useEffect} from 'react'

function Confirmation() {
    const path  = window.location.pathname.split('/')
    const fetchdata =  async ()=>{
        const response = await fetch(`http://:5000/confirmation/${path[2]}`, {
        })
        const data = await response.json()
        
        window.location = '/login'
    }
    
    useEffect(() =>{ 
        fetchdata()
        
    },[])
    
    return (
        <div>
            
            

            
        </div>
    )
}

export default Confirmation
