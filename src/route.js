import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

export default [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/product/:id',
        component: ProductPage,
        name: 'product',
        props: true
    }
]
