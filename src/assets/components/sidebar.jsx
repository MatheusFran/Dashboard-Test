import React, { useState } from 'react'
import './styles/sidebar.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import SpeedIcon from '@mui/icons-material/Speed';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Drawer } from '@mui/material';
import { Anchor, Dashboard } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import Dashboards from './pages/Dashboards';

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [view, setView] = useState('home'); // Estado para controlar a visualização atual

    // const renderView = () => {
    //     switch (view) {
    //         case 'home':
    //             return <Home />
    //         case 'dashboard':
    //             return <Dashboards />;
    //         default:
    //             return <NotFound />;
    //     }
    // };


    return (
        <>
            <div className='sidebar-left'>
                <div className='sidebar-text'> <BarChartIcon sx={{ color: 'white' }} />
                    <button onClick={() => setView('home')}> <Home /> </button>
                </div>
                <div className='sidebar-text'> <SpeedIcon sx={{ color: 'white' }} />
                    <button onClick={() => setView('dashboard')}> <Dashboards /> </button>
                </div>
                <div className='sidebar-text'> <ShoppingCartOutlinedIcon sx={{ color: 'white' }} />
                    <button onClick={() => setView('dashboard')}> <Dashboards /> </button>
                </div>
                <div className='sidebar-text'> <SettingsIcon sx={{ color: 'white' }} />
                    <button onClick={() => setView('dashboard')}> <Home /> </button>
                </div>
            </div>

            <div className='sidebar-responsive'>
                <MenuIcon onClick={handleOpen} sx={{ color: 'white' }} />
                <Drawer
                    anchor='left'
                    open={open}
                    onClose={handleClose}
                >
                    <div className='sidebar-mb'>
                        <div className='sidebar-mobile'>
                            <BarChartIcon sx={{ color: 'white' }} />
                            <a href='#' onClick={() => setView('home')}> Dashboard </a>
                        </div>
                        <div className='sidebar-mobile'> 
                            <SpeedIcon sx={{ color: 'white' }} /> 
                            <a href='#' onClick={() => setView('home')} >  Estatísticas </a> 
                        </div>
                        <div className='sidebar-mobile'> 
                            <ShoppingCartOutlinedIcon sx={{ color: 'white' }} /> 
                            <a href='#' onClick={() => setView('home')} > Transações </a> 
                        </div>
                        <div className='sidebar-mobile'> 
                            <SettingsIcon sx={{ color: 'white' }} />
                            <a href='#' onClick={() => setView('home')}> Configurações </a> 
                        </div>
                    </div>
                </Drawer>
            </div>
            {/* {renderView()} {/* Renderiza a view de acordo com o estado */}  
        </>
    )
}

export default Sidebar