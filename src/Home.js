import React, { useMemo } from 'react'
import Model from './Model'

const Home = () => {
    let vinay = true;
    console.log(vinay);
  const homebody = useMemo(()=>{
    vinay ? 
      <>
       <div>
         <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gRYEXyjFt3b269-Ds2VkJZcPhuvjCodOKw&usqp=CAU'/>
       </div>
      </>
      :
      <>
       <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gRYEXyjFt3b269-Ds2VkJZcPhuvjCodOKw&usqp=CAU'/>
       </div>
      </>
  },[vinay])
  return (
    <>
      <Model body = {homebody} name={"Home"}/>
    </>
  )
}

export default Home
