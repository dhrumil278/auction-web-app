import ItemMessage from "../models/itemMessage.js";

export const getItems = async (req,res)=> {
    try {
        const itemMessage = await ItemMessage.find();
        
        res.status(200).json(itemMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const addItem = async (req,res)=> {
    const item = req.body;

    const newItem = new ItemMessage(item);
    try {
        await newItem.save();

        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({message: error.message}); 
    }
}

export const itemInformation = async (req,res)=>{
    const id = request.param.id;

    try {
        const item = await ItemMessage.findById(id);
        res.json(item);
    } catch (error) {
        res.json({ message: error.message});
    }
}