const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests to /users'
    });
});

router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        gameTitle: req.body.gameTitle
    }
    res.status(200).json({
        message: 'handling POST requests to /users',
        user:user
    });
});

router.get('/:userId', (req, res, next) =>{
    // const id = req.params.userId;
    res.status(200).json({
        message: 'handling GET requests to /users/userId'
    });
});

router.delete('/:userId', (req, res, next) =>{
    // const id = req.params.userId;
    res.status(200).json({
        message: 'handling DELETE requests to /users/userId'
    });
});

router.patch('/:userId', (req, res, next) =>{
    // const id = req.params.userId;
    res.status(200).json({
        message: 'handling PATCH requests to /users/userId'
    });
});


module.exports=router;