import { Card, CardMedia, IconButton, Avatar, CardHeader, Drawer, Box, Grid, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { purple } from '@mui/material/colors';
import carImage from '../Static/images/car.jpg';
import CardDetails from './CardDetails';
import { getItems } from '../api/api';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

export default function Cards() {
    const [drawerState, setDrawerState] = useState(false);
    const [items, setItems] = useState([]);
    // const [itemData , setItemData] = useState();

    const DrawerOpen = () => (event) => {
        setDrawerState(!drawerState);
    };

    useEffect(() => {
        getAllItem()
    }, [])

    const getAllItem = async () => {
        const itemData = await getItems();
        console.log(itemData.data);
        setItems(itemData.data);
    }


    return (
        <>
            <Container>
                <Grid container spacing={3} style={{ alignItems: 'center' }}>
                        {
                            items.map(item => (
                                <Grid item md={4} sm={6} xs={12}>
                                    <Card sx={{ maxWidth: 345 }} >
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={carImage}
                                            alt="Car Images"
                                            onClick={() => setDrawerState(true)}

                                        />
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" sx={{ bgcolor: purple[500] }}>
                                                    {item.owner.charAt(0)}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <GradeOutlinedIcon />
                                                </IconButton>
                                            }
                                            title={item.itemName}
                                            subheader={item.owner}
                                        />
                                        <Drawer
                                            anchor="right"
                                            open={drawerState}
                                        >
                                            <Box
                                                sx={{ width: 500 }}
                                                role="presentation"
                                                onClick={DrawerOpen}
                                            >
                                                <CardDetails details={item} drawerclose={() => setDrawerState(false)} />
                                            </Box>
                                        </Drawer>
                                    </Card>
                                </Grid>
                            ))
                        }
                </Grid>
            </Container>



            {/* <Drawer
                anchor="right"
                open={drawerState}
            >
                <Box
                    sx={{ width: 500 }}
                    role="presentation"
                    onClick={DrawerOpen}
                >
                    <CardDetails details={items} drawerclose={() => setDrawerState(false)} />
                </Box>
            </Drawer> */}
        </>
    );
}