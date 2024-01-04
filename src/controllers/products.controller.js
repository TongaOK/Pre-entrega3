import ProductsDao from "../dao/products.dao.js";
export default class ProductController {
    getAllProducts = (req, res) => {
        return ProductsDao.getAllProducts(req, res)
    }

    getByPage = (req, res) => {
        return ProductsDao.getByPage(req, res)
    }

    getProductById = (req, res) => {
        return ProductsDao.getProductById(req, res)
    }

    createProduct = (req, res) => {
        return ProductsDao.createProduct(req, res)
    }

    updateProduct(req, res) {
        return ProductsDao.updateProduct(req, res)
    }

    deleteProduct(req, res) {
    return ProductsDao.deleteProduct(req, res)
}
}