import { Router } from 'express';
import Table from '../table';

const blogs = new Table('blogs');

let router = Router();

router.get('/', (req, res) => {
    blogs.getAll()
        .then((r) => {
            console.log(r);
            res.send(r);
        })
        .catch((err) => res.send(err));
});

export default router;
