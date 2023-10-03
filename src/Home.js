// import { useRoutes } from 'react-router-dom';
import './home.css';
import { Images } from './logo1';
import { Outlet, Link } from "react-router-dom";
import ModalExample from './components/Modal';

const user = {
  name: 'ລັດວິສາຫະກິດໄຟຟ້າລາວ',
  imageUrl: Images.logo,
  imThur: Images.Thur,
  imout : Images.out,
  imageSize: 90,
};

function MyButton() {
  

  return (
    <div className='container'>
      <img src={user.imageUrl} className='App-logo' />
      <img src={user.imThur} className='App-thur' />
      <img src={user.imout} className='App-out' />
      
    </div>
  );
}

export default function Myapp(options) {
 
  
  return(
    <>
    <div className='containers'>
      <MyButton/>
      <h1>{user.name}</h1>
    </div>
    <br/>
    <ModalExample/>
  
    </>
  )
};




