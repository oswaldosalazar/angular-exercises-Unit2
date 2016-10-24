app.factory("cartService", function() {
    return {
        cart: {},
        receiveCart: function (cart) {
            console.log(cart);
            this.cart = cart;
        }
    }
});
