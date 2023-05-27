import Layout from "../components/Layout";
import './product.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import {getAPIOrders, deleteOrders} from './API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
function Order() {
    const [data, setdata] = useState([])
    const isUser = localStorage.getItem('user');
    const onChangeDelete = (id) => {
        deleteOrders(id)
            .then(() => {
                getAPIOrders()
                    .then((data) => {
                        setdata(data)
                    })
                toast.success("Xóa sản phẩm thành công!");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getAPIOrders()
            .then((data) => {
                setdata(data)
            })

    }, [])
    return ( 
        <Layout>
            {isUser ?
            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <MenuIcon />
                    </div>
                    <div className="tieude">
                        <h3>ORDER INFORMATION</h3>
                    </div>
                    <div className="user"></div>
                </div>
                <div className="topfour">
                    <div className="tab-pane active">
                        <div className="details">
                            <div className="recentOrder">
                                <div className="cardHeader" style={{marginBottom: '20px'}}>
                                    <h2>All Orders</h2>
                                </div>
                                {/* <div style={{ display: 'flex', marginBottom: '35px' }}>
                                    <div className="container-1">
                                        <input type="search" id="search" title="Search" placeholder="Search by Name..." />
                                    </div>
                                </div> */}
                                <div className="wrap-table">
                                    <table className="content-table">
                                    <thead className="td">
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                    {data.map((datas) => (
                                        <tr className="active-row" key={datas.id}>
                                            <td className="stt">{datas.id}</td>
                                            <td className="name">{datas.name}</td>
                                            <td className="date">{datas.date}</td>
                                            <td className="feature">
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
            </div>:  null}
        </Layout>
     );
}

export default Order;