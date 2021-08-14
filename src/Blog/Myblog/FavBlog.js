import React,{useState,useEffect} from 'react'
import * as Cookies from "js-cookie";
import '../../Home/loader.css'
import FavPost from './FavPost'
function FavBlog() {
    const token =  Cookies.get("token")
    const [posts,Setpost] =  useState([])
    const [loader,setloader] =  useState(false)
    const getFavBlogs= async() =>{
        try {
            const token =  Cookies.get("token")
            const response = await fetch(`https://mern-blog-app-tun.herokuapp.com/favblog`, {
                
                headers: {
                    "Content-Type": "application/json",
                    
                    "Authorization": 'Bearer' + token
                }
                
            })
            const data = await response.json();
            if(data.error){
                return  false
            }else{
                Setpost(data)
                setloader(true)
            }
            
        } catch (err) {
            console.error(err.message);
        }
    }
    const removeFav = async(id)=>{
        console.log(id)
        try {
            
            const deletePost = await fetch(`https://mern-blog-app-tun.herokuapp.com/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    
                    "Authorization": 'Bearer' + token
                },
              method: "DELETE"
            });
      
            Setpost(posts.filter(post => post._id !== id));
          } catch (err) {
            console.error(err.message);
          }

    }
    
    useEffect(()=>{
        getFavBlogs()

    },[])
    return (
        <div>
            
                    <div className='flex justify-center flex-wrap space-x-6 content-start  ' >
                        
                        
                        
                            {
                            posts.length === 0  ? <h1>Add your fav blogs here</h1>  : 
                            loader ?
                                posts.map((post)=>(
                                        <FavPost title={post.title} description={post.description} imageURL={post.imageURL} owner={post.owner} removeFav={() =>removeFav(post._id)}  />
                                )) : <div className='lds-roller'></div>
                            
                        }
                        
                        
                        
                    </div>
                     
                
           
            
        </div>
    )
}

export default FavBlog
