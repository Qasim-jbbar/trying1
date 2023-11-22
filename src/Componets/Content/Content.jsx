import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "../../App.css"
import "./Content.css"
const Content =(item) =>{

    const [title,setTitle] = useState('');
    const[body,setBody] =useState('')

const handlechange =(e) =>{
   e.preventDefault();
   item.Content(title,body);
   setTitle('');
   setBody('');

}; 


    return(
      <div >
      <form className='content' onSubmit={Content}>       
        <div className='content'>
         <label className="cotent1" htmlFor='tile'>title</label>
         <input
         name='title'
         type='text'
         placeholder='Input yor Title...'
         input ={title}
         onChange={(e) => setBody(e.target.value)}/> <br/>

<label htmlFor='tile' className="cotent1" >Content</label>
          <textarea 
                    name="body" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>


         </div>
         <button type="submit" className="btn-submit">Add Post</button>

      </form>
      </div>
    )
    };
export default Content;