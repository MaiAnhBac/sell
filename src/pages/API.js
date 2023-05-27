export const getAPI = () => {
    return (
        fetch('http://localhost:4000/api/v1/products')
            .then((res) => res.json())
    )
};
export const getAPISearch = (search) => {
    return (
        fetch(`http://localhost:4000/api/v1/products/name=${search}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: search
             })
        })
            .then((res) => res.json())
    )
}
export const getAPIAllCategory = () => {
    return (
        fetch('http://localhost:4000/api/v1/products/category', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
    )
}
export const getAPICategory = (category) => {
    return (
        fetch(`http://localhost:4000/api/v1/products/category=${category}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category: category
            })
        })
            .then((res) => res.json())
    )
}
export const deleteProducts = (id) => {
    return (
        fetch(`http://localhost:4000/api/v1/products/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
    )
}
export const createProducts = (name, description, quantity_in_stock, price, category) => {
    return (
        fetch('http://localhost:4000/api/v1/products/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
                quantity_in_stock: quantity_in_stock,
                price: price,
                category: category
            })
        })
            .then((res) => res.json())
    )
};
export const getAPICustomers = () => {
    return (
        fetch('http://localhost:4000/api/v1/customers')
            .then((res) => res.json())
    )
};
export const getAPISearchCustomers = (search) => {
    return (
        fetch(`http://localhost:4000/api/v1/customers/name=${search}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: search
             })
        })
            .then((res) => res.json())
    )
};
export const createCustomers = (name, email, phone, address) => {
    return (
        fetch('http://localhost:4000/api/v1/customers/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                address: address,
            })
        })
            .then((res) => res.json())
    )
};
export const deleteCustomers = (id) => {
    return (
        fetch(`http://localhost:4000/api/v1/customers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
    )
}
export const getAPICustomersByID = (id) => {
    return (
        fetch(`http://localhost:4000/api/v1/customers/${id}`)
            .then((res) => res.json())
    )
};
export const getAPIProductsByID = (id) => {
    return (
        fetch(`http://localhost:4000/api/v1/products/${id}`)
            .then((res) => res.json())
    )
};
export const login = (email, password) => {
    return (
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res) => res.json())
    )
};
export const authorization = (accessToken) => {
    return (
        fetch('http://localhost:4000/api/get-user', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            }
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('user', JSON.stringify(data))
            })
    )
};
export const postAddNewUser = (name, email, password) => {
    return (
        fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        })
            .then(res => res.json())
    )
};
export const getAPIOrders = () => {
    return (
        fetch('http://localhost:4000/api/v1/orders')
            .then((res) => res.json())
    )
};
export const deleteOrders = (id) => {
    return (
        fetch(`http://localhost:4000/api/v1/orders//${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
    )
};
export const getAPIPayments = () => {
    return (
        fetch('http://localhost:4000/api/v1/payments')
            .then((res) => res.json())
    )
};
export const deletePayments = (id) => {
    return (
        fetch(`http://localhost:4000/api/v1/payments/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
    )
};
export const updateProducts = (id, name, description, quantity_in_stock, price, category) => {
    return (
        fetch(`http://localhost:4000/api/v1/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                name: name,
                description: description,
                quantity_in_stock: quantity_in_stock,
                price: price,
                category: category  
            })
        })
            .then((res) => res.json())
    )
};
export const getAPIWarehouses = () => {
    return (
        fetch('http://localhost:4000/api/v1/order_item')
            .then((res) => res.json())
    )
};