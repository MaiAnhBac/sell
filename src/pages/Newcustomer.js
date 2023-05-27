import Layout from "../components/Layout";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {createCustomers} from '../pages/API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/newproduct.css'
function Newcustomer() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const onChangeName = (e) =>{
        setName(e.target.value);
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value);
    }
    const onChangePhone = (e) =>{
        setPhone(e.target.value);
    }
    const onChangeAddress = (e) =>{
        setAddress(e.target.value);
    }
    const onClickSave = () =>{
        createCustomers(name, email, phone, address)
            .then(() => {})
            toast.success("Thêm thành công!");
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return ( 
            <div>
                <button className="btn-new" onClick={handleClickOpen}>
                    <span>
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                    </span>
                </button>
                {/* <button onClick={handleClickOpen} style={{marginLeft: '10px'}}>Thêm sản phẩm</button> */}
                {/* <Button variant="outlined" >
                    Open alert dialog
                </Button> */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center', color: 'red'}}>
                        {"Thêm mới khách hàng"}
                    </DialogTitle>
                    <DialogContent sx={{width: '500px'}}>
                        <DialogContentText id="alert-dialog-description">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="">Name</label>
                                <input className="input2" type="text" value={name} onChange={onChangeName} />
                                <label htmlFor="">Email</label>
                                <input className="input2" type="text" value={email}  onChange={onChangeEmail}/>
                                <label  htmlFor="">Phone </label>
                                <input className="input2" type="text" value={phone} onChange={onChangePhone}/>
                                <label htmlFor="">Address</label>
                                <input className="input2" type="text" value={address} onChange={onChangeAddress} />
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{mr: '27px'}}>
                        <button className="btn-submit" onClick={handleClose}>Cancel</button>
                        <button className="btn-submit" onClick={onClickSave} autoFocus>
                            Save
                        </button>
                    </DialogActions>
                </Dialog>
            </div>
     );
}

export default Newcustomer;