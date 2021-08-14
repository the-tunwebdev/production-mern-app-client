import React from 'react'
import EditBlog from './EditBlog' 
function Blog({title,imageURL,description,removePost,editPost,_id}) {
    const sendtoedit = (id)=>{
        window.location =  `/edit/${id}`    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg  "style={{margin : "20px",zIndex : "20",width : "300px" ,heigth : "400px"}}>
                        
                {imageURL ==='' ? null :<img className="w-full" src={imageURL}  style={{"height" : "40%"}} /> }
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center" style={{"height" : "20%"}}>{title}</div>
                    <p className="text-gray-700 text-base" style={{"height" : "45%"}}>
                                {description}
                                </p>
                </div>
                
                   
                    <div className="px-6 pt-4 pb-2  flex space-x-8">
                        
                        <button type="button" className="btn btn-warning" onClick={()=>sendtoedit(_id)}>Edit</button>
                            
                        <i className="fa fa-trash" style={{cursor : "pointer",fontSize : "30px",marginLeft : " auto"}} id='fav' onClick={removePost}></i>
                        
                                
                    </div>
                    
                
                
        </div>
    )
}

export default Blog
