app.factory("cartService", function() {
    return {
        cart: {},
        receiveCart: function (cart) {
            this.cart = cart;
        }
    }
});
