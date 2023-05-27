import '../pages/register.css'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [roles, setRoles] = useState('')
    const navigate = useNavigate();
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value) 
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeRoles = (e) => {
        setRoles(e.target.value)
    }
    const onClickSaveAdd = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !roles) {
            toast.error('Vui lòng nhập đầy đủ thông tin!');
        } else {
            try {
                const response = await axios.post('http://localhost:4000/api/register', { name, email, password, roles });
                // console.log(response.data); // handle successful signup
                toast.success('Đăng kí thành công!');
                navigate('/');
            } catch (error) {
                if (error.response && error.response.status === 409) { // 409 Conflict
                    toast.error('Email đã tồn tại, vui lòng sử dụng một địa chỉ email khác!');
                } else if (error.response.status === 422) {
                    toast.error("Vui lòng nhập email hợp lệ và mật khẩu phải 6 kí tự!");
                  } else {
                    toast.error('Đăng kí thất bại!');
                }
                // console.error(error.response.data);
            }
            setName('');
            setEmail('');
            setPassword('');
            setRoles('');
        }
    };
    return ( 
        <div className="form-box">
            <form className="form">
                <span className="box-title">Sign up</span>
                <span className="subtitle">Create a free account with your email.</span>
                <div className="form-container">
                    <input type="text" className="input" placeholder="Full Name" value={name} onChange={onChangeName} />
                    <input type="email" className="input" placeholder="Email" value={email} onChange={onChangeEmail} />
                    <input type="password" className="input" placeholder="Password" value={password} onChange={onChangePassword} />
                    <input type="text" className="input" placeholder="Roles" value={roles} onChange={onChangeRoles} />
                </div>
                <button type='submit' onClick={onClickSaveAdd}>Sign up</button>
            </form>
            <div className="form-section">
                <p>Have an account? <Link to='/'>Log in</Link> </p>
            </div>
        </div>
     );
}

export default Register;