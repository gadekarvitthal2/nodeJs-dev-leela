const productList = [{
    name:'Gogles',
    price:'250'
}];

const productFunc = (product)=> {
    productList.push(product);
}

module.exports = {
    productTitle:'E Commerce Project',
    productList:productList,
    productFunc
}