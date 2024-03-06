import { useState } from 'react'
import logo from './assets/logo.png'
import search from './assets/search.svg'

import button from './assets/button.svg'
import './App.css'

function App() {

  
  return (
<div style={{height:'100%', width:"100%",display:'flex',flexDirection:'column',backgroundColor:'#03151B',gap:'7rem'}} >


<div className='nav' style={{ height:'10%',display:'flex',justifyContent:'space-around',alignItems:'center', marginTop:'1%'}}>


 <img src={logo}  width={'6%'} />
  <div className='nav' style={{backgroundColor:'white',height:'50%',width:'30%',borderRadius:25,display:'flex',alignItems:'center', marginLeft:"13%"}}>
   <img src={search} alt="" srcset="" style={{width:'7%',marginLeft:'4%'}}  />
   <input placeholder='Search' style={{outline:'none',borderColor:'transparent',fontSize:20}}>
   </input>


  </div>
  <div style={{width:'20%',display:'flex',justifyContent:'space-around',height:'100%',alignItems:'center'}}>
  <div style={{backgroundColor:"#23843E",height:'50%',width:'40%',borderRadius:15,display:'flex',justifyContent:'center',alignItems:'center'}}>
   
  <p style={{fontFamily:'sans-serif',color:'white',fontWeight:700,fontSize:'20px'}}> SIGNUP</p>

  </div>
  <div style={{backgroundColor:"#23843E",height:'50%',width:'40%',borderRadius:15,display:'flex',justifyContent:'center',alignItems:'center'}}>
  <p style={{fontFamily:'sans-serif',color:'white',fontWeight:700,fontSize:'20px'}}> LOGIN</p>

  </div>
  </div>
</div>
<div className='middle' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
  <p className='paragraph'>
  WANT to CREATE NFT’s?    
  </p>
  <p className='paragraph'>Do It with few clicks!</p>
  <p style={{color:'white',fontFamily:'sans-serif',fontSize:'30px'}}>
  x users created their own nft till now,  </p>
  <p style={{color:'white',fontFamily:'sans-serif',margin:'auto',fontSize:'30px'}}> 
try a new way to create nft</p>

<img style={{marginTop:'5%',marginBottom:"5%"}} src={button}  width={'20%'} alt="" srcset="" />


</div>

</div>
  )
}

export default App
