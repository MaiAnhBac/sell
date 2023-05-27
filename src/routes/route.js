import Product from '../pages/Product';
import Customer from '../pages/Customer';
import EditCustomers from '../pages/EditCustomer';
import EditProducts from '../pages/EditProducts';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Order from '../pages/Order';
import Payment from '../pages/Payment';
import Warehouse from '../pages/Warehouse';
const publicRoutes = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/product', component: Product},
    {path: '/customer', component: Customer},
    {path: '/order', component: Order},
    {path: '/warehouse', component: Warehouse},
    {path: '/payment', component: Payment},
    {path: '/editcustomers/:id', component: EditCustomers},
    {path: '/editproducts/:id', component: EditProducts},
]

const privateRoutes = []

export {publicRoutes, privateRoutes };