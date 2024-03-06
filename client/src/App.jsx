import { useState, useEffect } from 'react';
import React from 'react';
import logo from './assets/logo.png';
import search from './assets/search.svg';
import Web3, { Contract } from 'web3';
import Nftease from "./contracts/Nftease.json"
import button from './assets/button.svg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import Modal from './Modal';
import './App.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'background.paper',
  display:'flex',
  justifyContent:'space-around',
  flexDirection:'column',
  alignItems:'center'
  ,borderRadius:7
};



function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [data, setData] = useState("nill");
  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);     //object of web3
      const networkId = await web3.eth.net.getId();    //getting network id
      const deployedNetwork = Nftease.networks[networkId];          //getting contracts address
      const contract = new web3.eth.Contract(     //instance of the contract
        Nftease.abi,
        deployedNetwork.address
      );
      console.log(contract);
      setState({ web3: web3, contract: contract });   //setting values in state
    }
    provider && template();
  }, []);


  async function minting(){
    const {contract} = state;
    await contract.methods.mint(name, description, url, price).send({from:"0x6F84d83f6D754C6cE7400914555Eb77B72CFa5c3"});
    window.location.reload();
  }

  async function getCounter() {
    const counterValue = await Contract.methods.counter().call();
    console.log('Counter Value:', counterValue);
    // Update your React component state or UI with the counter value
  }
  
  const[name,setName]=useState("")
  const[description,setDescription]=useState("")
  const[url,setUrl]=useState("")
  const[price,setPrice]=useState("")

  console.log(price)
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
  0 users created their own nft till now,  </p>
  <p style={{color:'white',fontFamily:'sans-serif',margin:'auto',fontSize:'30px'}}> 
try a new way to create nft</p>

<img  onClick={handleOpen} style={{marginTop:'5%',marginBottom:"5%"}} src={button}  width={'20%'} alt="" srcset="" />


</div>
<div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '40%' }}>
          {/* <input placeholder='Name' style={{border:'none',outline:'none',fontSize:'20px',borderBottom:'2px solid black'}}></input> */}
          <form style={{display:'flex',justifyContent:'space-around',flexDirection:'column',height:'100%',alignItems:'center'}}>
      <div>
        <label style={{fontFamily:'sans-serif'}} htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
           value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
          style={{border:'none',outline:'none',fontSize:'20px',borderBottom:'2px solid black'}}
        />
      </div>

      <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
        <label style={{fontFamily:'sans-serif'}} htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          style={{border:'none',outline:'none',fontSize:'20px',border:'2px solid black',borderRadius:10}}
          value={description}
          onChange={(e)=>{
            setDescription(e.target.value)
          }}
        />
      </div>

      <div>
        <label style={{fontFamily:'sans-serif'}} htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          style={{border:'none',outline:'none',fontSize:'20px',borderBottom:'2px solid black'}}
          value={url}
          onChange={(e)=>{
            setUrl(e.target.value)
          }}
        />
      </div>

      <div>
        <label style={{fontFamily:'sans-serif'}} htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          style={{border:'none',outline:'none',fontSize:'20px',borderBottom:'2px solid black'}}
          value={price}
          onChange={(e)=>{
            setPrice(e.target.value)
          }}
        />
      </div>

      <button onClick={minting} style={{border:'none',outline:'none',fontSize:'20px',border:'2px solid black',width:'30%',borderRadius:10}} type="submit">Submit</button>
    </form>
          
        </Box>
      </Modal>
    </div>
</div>
  )
}

export default App
