import React, { useState, useEffect } from "react";
import Content from "./Componets/Content/Content";
import Post from "./Componets/Post/Post";
import "./App.css";
import Navbar from "./Componets/Navbar/Navbar";
function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let resp = await fetch("https://dummyjson.com/products?limit=3&skip=10&select=title,price");
        let data = await resp.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }; getProducts();}, []);


const AddItem =  async (userId,title) =>{
  let itemdata= fetch('https://dummyjson.com/products/add', {
   method:POST,
   body:JSON.stringify({
title:title,

userId:Math.random().toString(36).slice(2)

   }),
   headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
    });
    const data= await Response.JSON();
    setProducts((em) => [data,...em])
};
const deletePost = async(id) => {
  const response = await fetch(`https://dummyjson.com/products/1/${id}`, {
    method: 'DELETE'
  })
    if(response.status === 200) {
      setProducts(
        products.filter((product) => {
          return product.id !== id;
        })
      )
    }
};


  return (
    
  <div className="Product_List">
    <Navbar/>
    <main>
   
      {/* Assuming you want to pass products as content */}
      
      <table className="posts-container">
        
        <ul>
        {products.map((product) => (
          <Post
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            brand ={product.brand}
            body={product.body}
            deletePost={deletePost}
            
          />
        ))}
      
        <Content content={products} />

      </ul>
      </table>
    </main>
  </div>
);

}

export default App;
