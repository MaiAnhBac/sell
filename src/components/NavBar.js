import LogoPL from '../images/logo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './navbar.css'
function NavBar() {
    const isUser = localStorage.getItem('user'); // Kiểm tra trạng thái đăng nhập
    const navigate = useNavigate();
    const handleLogOut = () =>{
        localStorage.removeItem('user')
        toast.success('Đăng xuất thành công!');
        navigate('/')
    }
    return ( 
        <>
            {isUser ?
            <div className="container">
                <div className="navigation">
                    <ul>
                        <li className="Nav">
                            <a href="/">
                                <img className="logo" src={LogoPL} />
                            </a>
                        </li>
                        <li className="Nav2" >
                            <NavLink to="/product" activeclassname="active" className="title2" id="openDefault">
                                <span className="icon"><HomeIcon /></span>
                                <span className="title">Home</span>
                            </NavLink>
                        </li>
                        <li className="Nav2">
                            <NavLink to="/customer" className="title2" >
                                <span className="icon"><PersonOutlineIcon /></span>
                                <span className="title">Customer</span>
                            </NavLink>
                        </li>
                        <li className="Nav2">
                            <NavLink to="/order" className="title2" >
                                <span className="icon"><AddBoxIcon /></span>
                                <span className="title">Order</span>
                            </NavLink>
                        </li>
                        <li className="Nav2">
                            <NavLink to="/payment" className="title2" >
                                <span className="icon"><PaymentIcon /></span>
                                <span className="title">Payment</span>
                            </NavLink>
                        </li>
                        <li className="Nav2">
                            <NavLink to="/warehouse" className="title2" >
                                <span className="icon"><AddBusinessIcon /></span>
                                <span className="title">Warehouse</span>
                            </NavLink>
                        </li>
                        <li className="Nav2-button">
                            <a className="title3" >
                                <button onClick={handleLogOut} type="submit" style={{display: 'flex', border: 'none', background: 'white', cursor: 'pointer'}}>
                                    <span className="icon"><LogoutIcon /></span>
                                    <span className="title">Logout</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>: null}
        </>
     );
}

export default NavBar;