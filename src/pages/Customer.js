import Layout from "../components/Layout";
import './product.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import {getAPICustomers, getAPISearchCustomers, deleteCustomers} from '../pages/API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link} from 'react-router-dom';
import Newcustomer from './Newcustomer';
function Customer() {
    const [data, setdata] = useState([])
    const [search, setSearch] = useState('')
    const isUser = JSON.parse(localStorage.getItem('user'));
    const onChangeDelete = (id) => {
        deleteCustomers(id)
          .then(() => {
            getAPICustomers()
              .then((data) => {
                setdata(data)
              })
            toast.success("Xóa khách hàng thành công!");
          })
          .catch(error => (console.log(error)));
      }
      const onSearchChange = (e) => {
        setSearch(e.target.value);
      }
      useEffect(() => {
        getAPICustomers()
          .then((data) => {
            setdata(data)
          })
      }, [])
    const onKeyPress = (e) => {
        if (search) {
            if (e.code === 'Enter') {
                getAPISearchCustomers(search)
                    .then((data) => {
                        setdata(data);
                    })
            }
        }
        
    }
    return ( 
        <Layout>
            {isUser ? 
            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <MenuIcon />
                    </div>
                    <div className="tieude">
                        <h3>CUSTOMER INFORMATION</h3>
                    </div>
                    <div className="user"></div>
                </div>
                <div className="topfour">
                    <div className="tab-pane active">
                        <div className="details">
                            <div className="recentOrder">
                                <div className="cardHeader">
                                    <h2>All Customer</h2>
                                    {/* <a href="#" className="btn" title="Thêm mới">Thêm mới</a> */}
                                    {isUser.data.roles=== "Admin" &&
                                    <Newcustomer />}
                                </div>
                                <div className="container-1" style={{ marginBottom: '35px' }}>
                                    <input type="search" id="search" title="Search" placeholder="Search by Name..." value={search} onChange={onSearchChange} onKeyPress={onKeyPress} />
                                </div>
                                <div className="wrap-table">
                                <table className="content-table">
                                    <thead className="td">
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                    {data.map((datas) => (
                                        <tr className="active-row" key={datas.id}>
                                            <td className="stt">{datas.id}</td>
                                            <td className="name">{datas.name}</td>
                                            <td className="date">{datas.email}</td>
                                            <td className="address">{datas.phone}</td>
                                            <td className="status">{datas.address}</td>
                                            <td className="feature">
                                                <Link to={`/editcustomers/${datas.id}`}>
                                                    <IconButton aria-label="edit"> <EditIcon /> </IconButton>
                                                </Link>
                                                <IconButton aria-label="delete" onClick={() => onChangeDelete(datas.id)}> <DeleteIcon /></IconButton>
                                            </td>
                                        </tr>
                                     ))}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>: null }
        </Layout>
     );
}

export default Customer;