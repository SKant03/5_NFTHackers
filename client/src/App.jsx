import { useState, useEffect } from 'react';
import bu from './assets/bu.svg' 
import gaming from './assets/gaming.svg'
import React from 'react';
import logo from './assets/logo.png';
import search from './assets/search.svg';
import Web3, { Contract } from 'web3';
import Nftease from "./contracts/Nftease.json"
import button from './assets/button.svg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import photo from './assets/photo.svg'
import music from './assets/music.svg'
import art from './assets/art.jpeg' 
import filter from './assets/filter.svg' 
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpeg'
// import Modal from './Modal';
import './App.css';
import { blue } from '@mui/material/colors';
const style = {
  outline:'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'white',
  display:'flex',
  justifyContent:'space-around',
  flexDirection:'column',
  alignItems:'center'
  ,borderRadius:7,
  
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

  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    async function template() {
      const web3 = new Web3(provider);     //object of web3
      const networkId = await web3.eth.net.getId();    //getting network id
      const deployedNetwork = Nftease.networks[networkId];          //getting contracts address
      const contract1 = new web3.eth.Contract(     //instance of the contract
        Nftease.abi,
        deployedNetwork.address
      );
      console.log("C!",contract1);
      setState({ web3, contract: contract1});  
      const temp1 = state;
      console.log(temp1);
       //setting values in state
    }

  console.log("state",state)
  useEffect(()=>{
    provider && template();
   },[])

 
  async function minting(event){
    getCounter();
    event.preventDefault();
    const {contract} = state;
    await contract.methods.mint(name, description, url, price).send({from:"0x6F84d83f6D754C6cE7400914555Eb77B72CFa5c3"});
   
  }
const[assets,setAssets]=useState(0);
  async function getCounter() {
    const {contract} = state;
    console.log("raeched")
     const temp= await contract.methods.counterval().call();
     setAssets(temp)
    console.log('Counter Value:', assets);
    // Update your React component state or UI with the counter value
  }
  useEffect
  const[name,setName]=useState("")
  const[description,setDescription]=useState("")
  const[url,setUrl]=useState("")
  const[price,setPrice]=useState("")

  console.log(price)


  
  //metamask//
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function init() {
      // Check if MetaMask is installed
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        try {
          // Request access to accounts
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Get the user's accounts
          const accs = await web3Instance.eth.getAccounts();
          setAccounts(accs);
        } catch (error) {
          console.error('User denied account access');
        }
      } else {
        console.error('MetaMask not found');
      }
    }

    init();
  }, []);
  const [selectedOption, setSelectedOption] = useState('Date');

  // Function to handle option changes
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }



  return (
<div style={{height:'100%', width:"100%",display:'flex',flexDirection:'column',backgroundColor:'#03151B'}} >


<div className='nav' style={{ height:'10%',display:'flex',justifyContent:'space-around',alignItems:'center', marginTop:'1%'}}>


 <img src={logo}  width={'6%'} />
  <div className='nav' style={{backgroundColor:'white',height:'50px',width:'30%',borderRadius:25,display:'flex',alignItems:'center', marginLeft:"13%"}}>
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
<div className='middle' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:'9%'}}>
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
    <div style={{width:'100%', height:'10%',display:'flex',flexDirection:'column',gap:'2rem',alignItems:'center'}}>
    <div className="bottom-button-div"style={{display:'flex',justifyContent:'space-around',width:'80%'}}>
      <img src={bu} alt="" /> 
      <img src={gaming}  alt="" /> 
      <img src={photo} alt="" />
      <img src={music} alt="" />  
      </div>
   
    <div className='art-images' style={{display:'flex',justifyContent:'center',width:'100%'}}>
<img src={art} style={{width:'90%',height:'500px',borderRadius:50}} alt="" />
    </div> 
    
    </div>

    <div style={{marginTop:'2%',marginLeft:'13%'}} >
    
      <div>

      <select style={{backgroundColor:"#AD9D9D",opacity:0.7,color:'white',fontSize:'20px',borderRadius:7,padding:5,fontWeight:700,outline:'none'}} value={selectedOption} onChange={handleOptionChange}>
        <option value="Date">DATE</option>
        <option value="Week">WEEK</option>
        <option value="Month">MONTH</option>
        <option value="Year">YEAR</option>
      </select></div>
    </div>


    <div style={{display:'flex',margin:'0 13%', justifyContent:'space-between'}}>
      <p style={{color:'white',fontFamily:'sans-serif',fontSize:'25px'}}>NEWEST</p>
      <p style={{color:'white',fontFamily:'sans-serif',fontSize:'25px'}}>PRICE</p>
    </div>
    
    <div className = 'BIG' style={{display:'flex',justifyContent:'space-between',margin:'0 11%', color:'white', fontFamily:'sans-serif', fontSize:'25px', flexDirection: 'row', marginBottom:'1%'}}>
      <div style={{display:'flex',flexDirection:'row'}} >
        <p style={{marginRight:"10%"}}>1.</p>
        <img src={img1} width={'100px'} alt="" />
      </div>
      <div>
        <p >
          Discription
        </p>
      </div>
      <div>
        <p>0.23E</p>
      </div>
   
    </div>
   
    <div className = 'BIG' style={{display:'flex',justifyContent:'space-between',margin:'0 11%', color:'white', fontFamily:'sans-serif', fontSize:'25px', flexDirection: 'row', marginBottom:'1%'}}>
      <div style={{display:'flex',flexDirection:'row'}} >
        <p style={{marginRight:"10%"}}>2.</p>
        <img src={img2} width={'90px'} alt="" />
      </div>
      <div>
        <p >
          Discription
        </p>
      </div>
      <div>
        <p>0.25E</p>
      </div>
   
    </div>

<div className = 'BIG' style={{display:'flex',justifyContent:'space-between',margin:'0 11%', color:'white', fontFamily:'sans-serif', fontSize:'25px', flexDirection: 'row', marginBottom:'1%'}}>
      <div style={{display:'flex',flexDirection:'row'}} >
        <p style={{marginRight:"10%"}}>3.</p>
        <img src={img3} width={'100px'} alt="" />
      </div>
      <div>
        <p >
          Discription
        </p>
      </div>
      <div>
        <p>0.30E</p>
      </div>
   
    </div>
  
    <div className = 'BIG' style={{display:'flex',justifyContent:'space-between',margin:'0 11%', color:'white', fontFamily:'sans-serif', fontSize:'25px', flexDirection: 'row', marginBottom:'1%'}}>
      <div style={{display:'flex',flexDirection:'row'}} >
        <p style={{marginRight:"10%"}}>4.</p>
        <img src={img1} width={'100px'} alt="" />
      </div>
      <div>
        <p >
          Discription
        </p>
      </div>
      <div>
        <p>0.27E</p>
      </div>
   
    </div>

    <div className='Footer' style={{backgroundColor:'transparent',height:'300px',display:'flex',justifyContent:'space-around',borderTop:'1px solid white',marginTop:'7%'}}>
    <div style={{color:'white',fontFamily:'sans-serif',fontWeight:500,display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
      <p>Marketplace</p>
      <p>Art</p>
      <p>Gaming</p>
      <p>Memberships</p>
      <p>Music</p>
      <p>Photography</p>
    </div>
    <div style={{color:'white',fontFamily:'sans-serif',fontWeight:500,display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
      <p>My Account</p>
      <p>Profile</p>
      <p>Favourites</p>
      <p>Settings</p>
      <p>NFTease Pro</p>

    </div>
    <div style={{color:'white',fontFamily:'sans-serif',fontWeight:500,display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
      <p>Resources</p>
      <p>blog</p>
      <p>Learn</p>
      <p>Help Center</p>
      <p>Community Standards</p>

    </div>
    

    </div>
</div>
  ) 
}

export default App
