const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<form><input name ="data"><button>submit</button></form>');
});

module.exports = router;