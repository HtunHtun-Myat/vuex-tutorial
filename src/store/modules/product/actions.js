import axios from "axios"

export const getProducts = ({ commit }) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            commit('GET_PRODUCTS', response.data)
        })
}

export const productDetail = ({ commit }, id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            commit('PRODUCT_DETAIL', response.data)
        })
}
