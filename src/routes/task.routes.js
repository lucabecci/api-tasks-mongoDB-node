import { Router } from 'express';
const router = Router();

//db connection
import { connect } from '../database/database'
import {ObjectID} from 'mongodb'    

router.get('/', async(req, res) => {
    try{
        const db = await connect()
        const result =  await db.collection('tasks').find({}).toArray();
        res.json(result)
    }
    catch(e){
        res.send(e)
    }
})


router.post('/', async(req, res) => {
    const db = await connect();
    const task ={
        title: req.body.title,
        description: req.body.description
    }
    const result = await db.collection('tasks').insert(task);
    console.log(result)
    res.json(result.ops[0])
})

router.get('/:id', async(req, res) => {
    const db = await connect();
    const { id } = req.params;
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)})
    res.json(result)
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)})
    res.json({
        message: `Task ${id} deleted`,
        result
    })
})

router.put('/:id', async(req, res) => {
    const { id } = req.params;
    const updateTask ={
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    const result = await db.collection('tasks').updateOne({_id: ObjectID(id)}, { $set: updateTask });

    res.json({
        message: `Task ${id} updated`
    })
})
export default router;