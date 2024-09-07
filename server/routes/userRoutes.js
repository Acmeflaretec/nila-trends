const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { getUser, addToCart, removeFromCart, addToWishlist, removeFromWishlist, updateQty, getUsers,
  getCartDetailsByUserId, updateUserProfile,updateUserStatus
} = require('../controllers/userController');

router.get('/getAllUsers', getUsers);
router.put('/update-status', updateUserStatus);
router.use(authorization)
router.get('/', getUser);
router.patch('/userDetails', updateUserProfile);
router.patch('/updateQty', updateQty);
router.patch('/addToCart/:id', addToCart);
router.patch('/removeFromCart/:id', removeFromCart);
router.patch('/addToWishlist/:id', addToWishlist);
router.patch('/removeFromWishlist/:id', removeFromWishlist);

router.get('/getcarts', authorization, getCartDetailsByUserId);


module.exports = router;