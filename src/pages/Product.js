import Layout from "../components/Layout";
import './product.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import {getAPI, getAPISearch, getAPICategory, getAPIAllCategory, deleteProducts} from './API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link} from 'react-router-dom';
import Newproduct from './Newproduct';
function Product() {
    const isUser = JSON.parse(localStorage.getItem('user'));
    const [data, setdata] = useState([])
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState([])
    const [select, setSelect] = useState('')
    const onChangeDelete = (id) => {
        deleteProducts(id)
            .then(() => {
                getAPI()
                    .then((data) => {
                        setdata(data)
                    })
                toast.success("Xóa sản phẩm thành công!");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const onChangeSelect = (e) => {
        setSelect(e.target.value);
        getAPICategory(e.target.value)
            .then((data) => {
                setdata(data)
            })
    }
    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }
    const onKeyPress = (e) => {
        if (search) {
            if (e.code === 'Enter') {
                getAPISearch(search)
                    .then((data) => {
                        setdata(data);
            })
            }
        }
        
    }
    useEffect(() => {
        getAPI()
            .then((data) => {
                setdata(data)
            })
        getAPIAllCategory()
            .then((cate) => {
                setCategory(cate);
            })

    }, [])
    return (
        <Layout>
            {isUser ? <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <MenuIcon />
                    </div>
                    <div className="tieude">
                        <h3>PRODUCT INFORMATION</h3>
                    </div>
                    <div className="user"></div>
                </div>
                <div className="topfour">
                    <div className="tab-pane active">
                        <div className="details">
                            <div className="recentOrder">
                                <div className="cardHeader">
                                    <h2>All Products</h2>
                                    {/* <a href="#" className="btn" title="Thêm mới">Thêm mới</a> */}
                                    {isUser.data.roles=== "Admin" &&
                                    <Newproduct category={category} />}
                                </div>
                                <div style={{ display: 'flex', marginBottom: '35px' }}>
                                    <div className="select-dropdown">
                                        <select value={select} onChange={onChangeSelect}>
                                            {category.map((cate, index) => (
                                                <option value={cate.category} key={index}>{cate.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="container-1">
                                        <input type="search" id="search" title="Search" placeholder="Search by Name..." value={search} onChange={onSearchChange} onKeyPress={onKeyPress} />
                                    </div>
                                </div>
                                <div className="wrap-table">
                                    <table className="content-table">
                                    <thead className="td">
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                    {data.map((datas) => (
                                        <tr className="active-row" key={datas.id}>
                                            <td className="stt">{datas.id}</td>
                                            <td className="name">{datas.name}</td>
                                            <td className="date">{datas.description}</td>
                                            <td className="address">{datas.quantity_in_stock}</td>
                                            <td className="status">{datas.price} VND</td>
                                            <td className="status">{datas.category}</td>
                                            <td className="feature">
                                                <Link to={`/editproducts/${datas.id}`}>
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
            </div> : null}
        </Layout>
     );
}

export default Product;