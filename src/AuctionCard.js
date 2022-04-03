import {ButtonGroup, Button, Grid } from '@mui/material';
import React from 'react';
import Cards from './Component/Cards';

export default function AuctionCard(){

    

    return(
        <>
        <ButtonGroup variant="outlined" color="secondary" aria-label="outlined button group" style={{ marginTop: 20, marginBottom: 20, width: '100%' }}>
            <Button>OnGoing Auction</Button>
            <Button>Upcoming Auction</Button>
        </ButtonGroup>
        <Cards />
        {/* <Grid container spacing={3} style={{alignItems:'center'}}>
            <Grid item md={4} sm={6} xs={12}>
                    <Cards style={{border:'2px solid black'}}/>
            </Grid>
        </Grid> */}
        </>
        
    );
}