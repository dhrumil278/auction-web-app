import { Container, Typography, Avatar, Box, IconButton ,Button, Stack, Dialog, DialogTitle, TextField } from '@mui/material';
import carImage from '../Static/images/car.jpg';
import { makeStyles } from '@mui/styles';
import { purple } from '@mui/material/colors';
import React,{ useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import CancelIcon from '@mui/icons-material/Cancel';
import { itemInformation } from '../api/api';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles({
    cardImage:{
        width: 300,
        height: 300,
        background: `url(${carImage})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "cover"
    },
    contactDetails:{
        marginTop: 20,
    },
    form:{
        display:'flex',
        flexDirection:'column',
        padding:20
    },
    textFild:{
        marginBottom:15
    }

})


export default function CardDetails({drawerclose, details}){
    const classes = useStyles()
    const item = details;

    // const [open, setOpen] = useState(false);
    const [openDig, setOpenDig] = useState(false);
    // const [item , setItem] = useState();

    
    
    // const {id}=useParams();

    // useEffect(()=>{
    //     showItemInformation();
    // })
    // const showItemInformation = async ()=>{
    //     const response = await itemInformation(id);
    //     setItem(response.data);
    // }

    
    
    
    const handleClickOpen = () => {
        setOpenDig(true);
      };

    const handleClose = () => {
        setOpenDig(false);
      };
    const handleSubmit=() =>{

    };
    return(
        <Container 
        style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems:'center'
              
        }}>
            <Box sx={{width:'100%' , padding:0}}>
                <IconButton onClick={drawerclose} sx={{ }} ><CancelIcon color='secondary' sx={{ display:'flex', marginRight:'auto', fontSize:30}} /></IconButton>
            </Box>
            <Box className={classes.cardImage} style={{ borderRadius:15}}></Box>
            <Typography variant='h4' color='secondary' marginTop={4} style={{fontWeight:'700'}}>
                {item.itemName}
            </Typography>
            <Box className={classes.contactDetails} 
                style={{display: 'flex', }}
            >
                <div className={classes.LeftContactDetails}>
                    <Avatar marginTop={5} aria-label="" sx={{bgcolor: purple[500], fontSize:25, padding:1}}>
                        {item.owner.charAt(0)}
                    </Avatar>
                </div>
                <Box className={classes.RightContactDetails} marginLeft={2}>
                    <Typography className={classes.owner} style={{ fontSize: 15 }}>Owner</Typography>
                    <Typography className={classes.ownerName} style={{ fontSize: 18, fontWeight:500 }}>{item.owner}</Typography>
                </Box>
            </Box>
            <Box m='auto' marginTop={3} color='white' width={350} style={{display: 'flex',backgroundColor: purple[500], borderRadius:15 }}>
                <Box padding={2} style={{display: 'flex',flexDirection:'column', textAlign:'center', width:120}}>
                    <Typography marginBottom={2}>Curent Bid</Typography>
                    <Typography>5000 Rs.</Typography>
                </Box> 
                <Divider orientation="vertical" flexItem color='white'/>   
                <Box padding={2} style={{display: 'flex',flexDirection:'column', textAlign:'center', width:70}}>
                    <Typography marginBottom={2}>Hr</Typography>
                    <Typography>18</Typography>
                </Box>
                <Divider orientation="vertical" flexItem color='white'/>
                <Box padding={2} style={{display: 'flex',flexDirection:'column',textAlign:'center', width:70, lineHeight:50}}>
                    <Typography  marginBottom={2}>Min</Typography>
                    <Typography>45</Typography>
                </Box>
                <Divider orientation="vertical" flexItem color='white'/>
                <Box padding={2} style={{display: 'flex',flexDirection:'column',textAlign:'center', width:70}}>
                    <Typography marginBottom={2}>Sec</Typography>
                    <Typography>25</Typography>
                </Box>
                
            </Box>
            <Stack spacing={4} direction="row" marginTop={4}>
                <Button variant="outlined" color='secondary' >Know More</Button>
                <Button variant="contained" color='secondary' onClick={handleClickOpen} >Bid Now</Button>
                <Dialog
                open={openDig}
                onClose={handleClose}
            >
                <DialogTitle>Enter Your Bidding Amount</DialogTitle>
                    <Box>
                        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                            <TextField id="outlined-basic" label="Enter the Amount" variant="outlined" color='secondary' className={classes.textFild} />
                            <Button onClick={handleClose} variant="contained" type='submit'  color='secondary' fillWidth>Submit</Button>
                        </form>
                    </Box>
                
            </Dialog>
            </Stack>
           
        </Container>
    );
}