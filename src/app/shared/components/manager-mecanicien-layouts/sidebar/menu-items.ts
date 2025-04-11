import { MenuItem } from "primeng/api";


export const mecanicienItem: MenuItem[] = [
    {
        label: 'Tâches',
        items: [
            {
                label: 'Liste à faire',
                icon: 'pi pi-list',
                url: '/mecanicien/task',
            }
        ]
    },
];
 
export const items: MenuItem[] = [
    {
        label: 'DashBoard',
        items: [
            {
                label: 'Chiffre d\'affaire',
                icon: 'pi pi-dollar',
                url: '/manager/revenue',
            }
        ]
    },
    {
        label: 'Devis',
        items: [
            {
                label: 'Liste',
                icon: 'pi pi-list',
                url: '/manager/quote/list',
            },
            {
                label: 'A valider',
                icon: 'pi pi-list-check',
                url: '/manager/quote/list/validation',
            },
        ]
    },
    {
        label: 'Rendez-vous',
        items: [
            {
                label: 'Calendrier',
                icon: 'pi pi-calendar',
                url: '/manager/appointment',
            }
        ]
    },
    {
        label: 'Tâches',
        items: [
            {
                label: 'Affectation',
                icon: 'pi pi-user-edit',
                url: '/manager/task/affectation',
            },
            {
                label: 'Suivi',
                icon: 'pi pi-check-square',
                url: '/manager/task/list',
            }
        ]
    },
    {
        label: 'Parametrages',
        icon: 'pi pi-user',
        items: [
            {
                label: 'Prestations',
                icon: 'pi pi-list',
                url: '/manager/prestation',
            },
            {
                label: 'Articles',
                icon: 'pi pi-list',
                url: '/manager/article',
            },
        ]
    },
    {
        label: 'Mécaniciens',
        icon: 'pi pi-user',
        items: [
            {
                label: 'Suivi des performances',
                icon: 'pi pi-cog',
                url: '/manager/performances',
            },
        ]
    },
];

