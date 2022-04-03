import React from 'react';
import {Container, Typography, Box } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AuctionCard from './AuctionCard';
import Profile from './profile';
import AddItem from './AddItem';
import Drawer from './Component/Cards';



export default function App() {

    return (
        <Router>
            <Container>
                <Navbar />
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h4' color='secondary' style={{ fontWeight: 600, fontSize: 40, width: '100%' }}>
                        Online Auction
                    </Typography>
                    
                    <Switch>
                        <Route exact path='/'>
                            <AuctionCard />
                        </Route>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/AddItem'>
                            <AddItem />
                        </Route>
                    </Switch>
                </Box>

            </Container>
        </Router>
    );
}

