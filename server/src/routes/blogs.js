import { Router } from 'express';
import Table from '../table';

const blogs = new Table('blogs');

let router = Router();

router.get('/:id', (req, res) => {
    blogs
        .getOne(req.params.id)
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => res.send(err));
});

router.get('/', (req, res) => {
    blogs
        .getAll()
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => res.send(err));
});

router.post('/', (req,res) => {
    blogs.insert(req.body)
    .then(id => {
        console.log(id);
        res.send(id);
    }).catch(err => console.log(err))
})

export default router;
