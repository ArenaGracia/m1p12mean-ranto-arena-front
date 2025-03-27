import { MenuItem } from "primeng/api";

 
 export const items: MenuItem[] = [
    {
        label: 'Devis',
        items: [
            {
                label: 'Liste des Devis',
                icon: 'pi pi-list',
                url: '/manager/quote/list',
            },
        ]
    },
    {
        label: 'Tâches',
        items: [
            {
                label: 'Affectation',
                icon: 'pi pi-chart-line',
                url: '',
            },
            {
                label: 'Suivi',
                icon: 'pi pi-list',
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
        ]
    },
    {
        label: 'Mécaniciens',
        icon: 'pi pi-user',
        items: [
            {
                label: 'Suivi des performances',
                icon: 'pi pi-cog',
                url: '',
            },
        ]
    }
];