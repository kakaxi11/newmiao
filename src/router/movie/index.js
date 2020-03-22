export default {
    path: '/movie',
    component: () =>
        import ('../../../src/views/movie'), //懒加载写法
    children: [{
            path: '/city',
            component: () =>
                import ('../../views/city.vue')
        },
        {
            path: '/nowplaying',
            component: () =>
                import ('../../views/nowplaying.vue')
        },
        {
            path: '/nowlater',
            component: () =>
                import ('../../views/nowlater.vue')
        },
        {
            path: '/search',
            component: () =>
                import ('../../views/movie/search.vue')
        },
        {
            path: 'detail',
            components: {
                detail: () =>
                    import ('../../views/movie/detail')
            }
        }
    ]
}