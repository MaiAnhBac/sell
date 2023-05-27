import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getAPIProductsByID, updateProducts} from '../pages/API'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../pages/editcustomer.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EditProducts() {
    const {id} = useParams()
    const [data, setData] = useState('')
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [save, setSave] = useState(false)

    const onSave = () => {
        setSave(!save)
        updateProducts(id, name, description, quantity, price, category)
            .then(()=> {
                toast.success('Cập nhật sản phẩm thành công!')
                getAPIProductsByID(id)
                .then((data) => {
                    setData(data)
                    setName(data[0].name)
                    setDescription(data[0].description)
                    setQuantity(data[0].quantity_in_stock)
                    setPrice(data[0].price)
                    setCategory(data[0].category)
                })
            })
    }
    useEffect(() => {
        if(id) {
            getAPIProductsByID(id)
                .then((data) => {
                    setData(data)
                    setName(data[0].name)
                    setDescription(data[0].description)
                    setQuantity(data[0].quantity_in_stock)
                    setPrice(data[0].price)
                    setCategory(data[0].category)
                })
        }
    },[id])
    return ( 
        <Layout>
            <div style={{ padding: 80, display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: 500 }}>
                    <Paper elevation={20} sx={{ height: 600 }}>
                        <h2 style={{ textAlign: 'center' }}>Edit Products</h2>
                        <label htmlFor="" className="label-edit">Name</label>
                        {save ? <input type="text" className="input-edit" onChange={(e) => setName(e.target.value)}  />:
                        <input type="text" className="input-edit" value={name} disabled />}
                        <label htmlFor="" className="label-edit">Description</label>
                        {save ? <input type="text" className="input-edit" onChange={(e) => setDescription(e.target.value)}  />:
                        <input type="text" className="input-edit" value={description} disabled />}
                        <label htmlFor="" className="label-edit">Quantity</label>
                        {save ? <input type="text" className="input-edit" onChange={(e) => setQuantity(e.target.value)}  />:
                        <input type="text" className="input-edit" value={quantity} disabled />}
                        <label htmlFor="" className="label-edit">Price</label>
                        {save ? <input type="text" className="input-edit" onChange={(e) => setPrice(e.target.value)}  />:
                        <input type="text" className="input-edit" value={price} disabled />}
                        <label htmlFor="" className="label-edit">Category</label>
                        <input type="text" className="input-edit" value={category} disabled />
                        <div className="div-submit">
                            { save ?
                            <button className="btn-submit" autoFocus onClick={onSave}>
                                Save
                            </button> :
                            <button className="btn-submit color" autoFocus onClick={() => setSave(!save)}>
                                Edit
                            </button>}
                        </div>
                    </Paper>
                </Box>
            </div>
        </Layout>
        );
}

export default EditProducts;