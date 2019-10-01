const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');
 
router.get('/', auth, stuffCtrl.getThings);

router.post('/', auth, multer, stuffCtrl.createThing);

router.get('/:id', auth, stuffCtrl.getOneThing);

router.put('/:id', auth, multer, stuffCtrl.updateOneThing);

router.delete('/:id', auth,  stuffCtrl.deleteOneThing);

module.exports = router;