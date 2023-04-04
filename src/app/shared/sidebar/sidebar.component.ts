import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    childMenu:Array<object>;
}

export const ROUTES: RouteInfo[] = [
    {
      path: '/attributes', title: 'Attributes', icon:'nc-single-02', class: '',
        childMenu: null
    },
    {
      path: '/products', title: 'Products', icon:'nc-single-02', class: '',
        childMenu: null
    },
    {
        path: '/users', title: 'Users', icon:'nc-single-02', class: '',
        childMenu: null
    },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
