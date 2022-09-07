export const cartCount = (state) => {
    return state.cart.length
}

export const totalPrice = (state) => {
    let total = 0
    state.cart.forEach(item => {
        total += item.product.price * item.quantity
    })
    return total
}