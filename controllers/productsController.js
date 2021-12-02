exports.products_list = function(req, res) {
    res.send('Liste des produits');
};

exports.product_infos = function(req, res) {
    productId = req.params.productId
    res.send('Fiche produit: ' + productId);
}