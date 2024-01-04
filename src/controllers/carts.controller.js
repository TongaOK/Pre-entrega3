import CartDAO from "../dao/carts.dao.js";

export default class CartController {
    findById = (cid) => {
    return CartDAO.findById(cid);
    }

    deleteProduct = (cid, pid) => {
      return CartDAO.deleteProduct(cid, pid);
    }

    updateCart = (cartId, newProducts) => {
      return CartDAO.updateCart(cartId, newProducts);
    }

    updateProductQuantity = (cartId, productId, newQuantity) => {
      return CartDAO.updateProductQuantity(cartId, productId, newQuantity);
    }

    deleteAllProductsFromCart = (cartId) => {
      return CartDAO.deleteAllProducts(cartId);
    }
}