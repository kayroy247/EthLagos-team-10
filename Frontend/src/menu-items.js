export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'Agents',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'AGENT',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'List',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Commission Types',
                            type: 'item',
                            url: '/basic/badges'
                        }
                        
                    ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'METERS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Meters',
                    // type: 'item',
                    type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'button',
                            title: 'List',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Types',
                            type: 'item',
                            url: '/basic/badges'
                        }
                    ]
                }
                // {
                //     id: 'bootstrap',
                //     title: 'Types',
                //     type: 'item',
                //     icon: 'feather icon-server',
                //     url: '/tables/bootstrap'
                // }
            ]
        },
        {
            id: 'ui-forms',
            title: 'TRANSACTIONS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Transactions',
                    type: 'item',
                    // type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                }
            ]

        },
        {
            id: 'ui-forms',
            title: 'TICKETS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Tickets',
                    //type: 'item',
                    type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'button',
                            title: 'List',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Users',
                            type: 'item',
                            url: '/basic/badges'
                        },
                        {
                            id: 'badges',
                            title: 'Categories',
                            type: 'item',
                            url: '/basic/badges'
                        }
                    ]
                }
                
            ]

        },
        {
            id: 'ui-forms',
            title: 'TARRIFS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Tarrifs',
                    type: 'item',
                    // type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                }
            ]

        },
        {
            id: 'ui-forms',
            title: 'TARGETS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Targets',
                    type: 'item',
                    // type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                }
            ]

        },
        {
            id: 'ui-forms',
            title: 'REPORTS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Reports',
                    type: 'item',
                    // type: 'collapse',
                    url: '/dashboard/report',
                    icon: 'feather icon-server',
                }
            ]

        },

        {
            id: 'ui-forms',
            title: 'CONNECTION',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Connection',
                    // type: 'item',
                    type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'button',
                            title: 'Groups',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Types',
                            type: 'item',
                            url: '/basic/badges'
                        }
                    ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'SMS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Sms',
                    // type: 'item',
                    type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'button',
                            title: 'Sms List',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'New Sms',
                            type: 'item',
                            url: '/basic/badges'
                        }
                    ]
                }
            ]
        },

        {
            id: 'ui-forms',
            title: 'ASSET TYPES',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Asset Types',
                    type: 'item',
                    // type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                }
            ]

        },

        {
            id: 'ui-forms',
            title: 'MAINTENANCE',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Maintenance',
                    type: 'item',
                    // type: 'collapse',
                    url: '/forms/form-basic',
                    icon: 'feather icon-server',
                }
            ]

        },

        {
            id: 'chart-maps',
            title: 'LOCATIONS',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Add Clusters',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
                {
                    id: 'maps',
                    title: 'Add Village',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Login',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Login Page',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            //target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            //target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                // {
                //     id: 'sample-page',
                //     title: 'Sample Page',
                //     type: 'item',
                //     url: '/sample-page',
                //     classes: 'nav-item',
                //     icon: 'feather icon-sidebar'
                // },
                // {
                //     id: 'docs',
                //     title: 'Documentation',
                //     type: 'item',
                //     url: '/docs',
                //     classes: 'nav-item',
                //     icon: 'feather icon-help-circle'
                // },
                // {
                //     id: 'menu-level',
                //     title: 'Menu Levels',
                //     type: 'collapse',
                //     icon: 'feather icon-menu',
                //     children: [
                //         {
                //             id: 'menu-level-1.1',
                //             title: 'Menu Level 1.1',
                //             type: 'item',
                //             url: '#!',
                //         },
                //         {
                //             id: 'menu-level-1.2',
                //             title: 'Menu Level 2.2',
                //             type: 'collapse',
                //             children: [
                //                 {
                //                     id: 'menu-level-2.1',
                //                     title: 'Menu Level 2.1',
                //                     type: 'item',
                //                     url: '#',
                //                 },
                //                 {
                //                     id: 'menu-level-2.2',
                //                     title: 'Menu Level 2.2',
                //                     type: 'collapse',
                //                     children: [
                //                         {
                //                             id: 'menu-level-3.1',
                //                             title: 'Menu Level 3.1',
                //                             type: 'item',
                //                             url: '#',
                //                         },
                //                         {
                //                             id: 'menu-level-3.2',
                //                             title: 'Menu Level 3.2',
                //                             type: 'item',
                //                             url: '#',
                //                         }
                //                     ]
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     id: 'disabled-menu',
                //     title: 'Disabled Menu',
                //     type: 'item',
                //     url: '#',
                //     classes: 'nav-item disabled',
                //     icon: 'feather icon-power'
                // },
                /*{
                    id: 'buy-now',
                    title: 'Buy Now',
                    type: 'item',
                    icon: 'feather icon-user',
                    classes: 'nav-item',
                    url: 'https://codedthemes.com',
                    target: true,
                    external: true,
                    badge: {
                        title: 'v1.0',
                        type: 'label-primary'
                    }
                }*/
            ]
        }
    ]
}
