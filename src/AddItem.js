import { Container, TextField, Button, Typography, FormGroup, FormControl } from '@mui/material';
import FileBase from 'react-file-base64';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { addItems } from './api/api';
import { styled } from '@mui/material/styles';



const useStyles = makeStyles({

    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    textFild: {
        margin: 5
    }



})

const initialValues = {
    owner:'',
    itemName: '',
    itemCatagory: '',
    aboutItem: ''
}
export default function AddItem() {
    const classes = useStyles()

    const [item, setItem] = useState(initialValues);
    const { itemName, itemCatagory, aboutItem, owner } = item;

    const onValueChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        const res = await addItems(item);
        console.log(res)
    }
    const FileBase = styled('input')({
        display: 'none',
      });
    return (
        <>
            <Container sx={{ width: 750 }}>
                <Typography variant='h4' marginTop={3} marginLeft={2} marginBottom={4} fontWeight={700} color='secondary'>Add Item </Typography>
                <FormGroup>
                    <FormControl className={`${classes.root} ${classes.addItemForm}`}>
                        <TextField
                            id="owner"
                            label="Owner"
                            name='owner'
                            value={owner}
                            variant="outlined"
                            multiline
                            color='secondary'
                            required
                            className={classes.textFild}
                            fullWidth
                            onChange={(e) => onValueChange(e)}
                        />
                        <TextField
                            id="itemNameId"
                            label="Item Name"
                            name='itemName'
                            value={itemName}
                            variant="outlined"
                            color='secondary'
                            required className={classes.textFild}
                            fullWidth
                            onChange={(e) => onValueChange(e)}
                        />
                        <TextField
                            id="itemCatagoryId"
                            label="Item Catagory"
                            name='itemCatagory'
                            value={itemCatagory}
                            variant="outlined"
                            color='secondary'
                            required
                            className={classes.textFild}
                            fullWidth
                            onChange={(e) => onValueChange(e)}
                        />
                        <TextField
                            id="aboutItemId"
                            label="About Item"
                            name='aboutItem'
                            value={aboutItem}
                            variant="outlined"
                            multiline
                            rows={2}
                            color='secondary'
                            required
                            className={classes.textFild}
                            fullWidth
                            onChange={(e) => onValueChange(e)}
                        />
                        
                        <label htmlFor="contained-button-file">
                            <FileBase
                                type='file' 
                                multiple={false}
                                onDone={({base64})=> setItem({ ...item, seectedFile: base64}) }
                            />
                            <Button variant="outlined" color='secondary' component="span">
                            Upload Img
                            </Button>
                        </label>
                        {/* </Button> */}
                        
                        <Button
                            variant="contained"
                            // type='submit'
                            color='secondary'
                            className={classes.textFild}
                            sx={{ width: 250 }}
                            onClick={() => sendData()}
                        >Submit</Button>
                    </FormControl>
                </FormGroup>
            </Container>
        </>
    );
}