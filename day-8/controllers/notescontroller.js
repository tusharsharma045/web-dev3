const {notes} = require('../models/data');

const getAllNotes = (req,res)=>{
    res.status(200).send(notes);
}

const createNote = (req,res)=>{
    const {title, description, link, author, createdOn, note} = req.body;

    const newData = {
        id: notes.length + 1,
        title,
        description,
        note,
        link,
        author,
        createdOn
    };
    notes.push(newData);
    res.status(201).send(newData);
}

module.exports = {
    getAllNotes,
    createNote
};