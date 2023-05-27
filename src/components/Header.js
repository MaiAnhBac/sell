import { AppBar, Box, Toolbar, Typography} from '@mui/material'
import {NavLink, Link} from 'react-router-dom';
import './header.css'
function Header() {
    return ( 
        <Box>
            <AppBar className='appbar' component={"nav"} >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Retail Management System</Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <ul className='navigation-menu'>
                            <li>
                                <NavLink activeclassname="active" to="/">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/customers">Customers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order">Order</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order_item">Order Item</NavLink>
                            </li>
                            <li>
                                <NavLink to="/payment">Payment</NavLink>
                            </li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
     );
}

export default Header;