export const ADD_TO_CART = (state, { product, quantity }) => {
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id
    })

    if (productInCart) {
        productInCart.quantity += quantity
        return
    } else {
        state.cart.push({
            product,
            quantity
        })
    }
}

export const CLEAR_CARTS = (state) => {
    state.cart = []
}

export const REMOVE_CART = (state, productId) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== productId
    })
}