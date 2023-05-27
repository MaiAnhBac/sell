import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import {getAPICustomersByID} from '../pages/API'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../pages/editcustomer.css'
function EditCustomers() {
    const {id} = useParams()
    const [data, setData] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    useEffect(() => {
        if(id) {
            getAPICustomersByID(id)
                .then((data) => {
                    setData(data)
                    setName(data[0].name)
                    setEmail(data[0].email)
                    setPhone(data[0].phone)
                    setAddress(data[0].address)
                })
        }
    },[id])
    return (
        <Layout>
            <div style={{ padding: 80, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{width: 500}}>
                <Paper elevation={20} sx={{height: 500 }}>
                    <h2 style={{textAlign: 'center'}}>Edit Customers</h2>
                    <label htmlFor="" className="label-edit">Name</label>
                    <input type="text" className="input-edit" value={name} />
                    <label htmlFor="" className="label-edit">Email</label>
                    <input type="text" className="input-edit" value={email} />
                    <label htmlFor="" className="label-edit">Phone</label>
                    <input type="text" className="input-edit" value={phone} />
                    <label htmlFor="" className="label-edit">Address</label>
                    <input type="text" className="input-edit" value={address} />
                    <div className="div-submit">
                        <button className="btn-submit" autoFocus>
                            Save
                        </button>
                    </div>
                </Paper>
              </Box>
            </div>
        </Layout>
     );
}

export default EditCustomers;