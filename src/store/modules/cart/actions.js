export const addProductToCard = ({ commit, dispatch }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity })
    dispatch('pushNotification', {
        type: 'success',
        message: 'Add product to cart succefully.'
    }, { root: true })
}

export const clearCarts = ({ commit, dispatch }) => {
    commit('CLEAR_CARTS')
    dispatch('pushNotification', {
        type: 'danger',
        message: 'All producs are removed from cart.'
    }, { root: true })
}

export const removeCarts = ({ commit, dispatch }, productId) => {
    commit('REMOVE_CART', productId)
    dispatch('pushNotification', {
        type: 'danger',
        message: 'Product are removed from cart.'
    }, { root: true })
}