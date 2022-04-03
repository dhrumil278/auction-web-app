import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    itemName : String,
    aboutItem : String,
    owner : String,
    selectedFile :String,
    itemCatagory: String,
    createdAt : {
        type : Date,
        default : new Date()
    }

});

const ItemMessage = mongoose.model('ItemMessage', itemSchema);

export default ItemMessage;