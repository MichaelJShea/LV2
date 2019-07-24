import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-monitor',
        url: '/dashboard',
        classes: 'nav-item',
        target: false,
        breadcrumbs: false
      },
      {
        id: 'agreements',
        title: 'Agreements',
        type: 'collapse',
        icon: 'feather icon-briefcase',
        children: [
          {
            id: 'search-agreements',
            title: 'Search',
            type: 'item',
            url: '/agreements/search',
            icon: 'feather icon-search'
          },
          {
            id: 'new-agreement',
            title: 'Add',
            type: 'item',
            url: '/agreements/new',
            icon: 'feather icon-plus'
          },
        ]
      },
      {
        id: 'units',
        title: 'Units',
        type: 'collapse',
        icon: 'feather icon-cpu',
        children: [
          {
            id: 'search-units',
            title: 'Search',
            type: 'item',
            url: '/units/search',
            icon: 'feather icon-search'
          },
          {
            id: 'new-unit',
            title: 'Add',
            type: 'item',
            url: '/units/new',
            icon: 'feather icon-plus'
          },
        ]
      },
      {
        id: 'wells',
        title: 'Wells',
        type: 'collapse',
        icon: 'feather icon-layers',
        children: [
          {
            id: 'search-wells',
            title: 'Search',
            type: 'item',
            url: '/wells/search',
            icon: 'feather icon-search'
          },
          {
            id: 'new-well',
            title: 'Add',
            type: 'item',
            url: '/wells/new',
            icon: 'feather icon-plus'
          },
        ]
      },
      {
        id: 'owners',
        title: 'Owners',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'search-owners',
            title: 'Search',
            type: 'item',
            url: '/owners/search',
            icon: 'feather icon-search'
          },
          {
            id: 'new-owner',
            title: 'Add',
            type: 'item',
            url: '/owners/new',
            icon: 'feather icon-plus'
          },
        ]
      },
      {
        id: 'cases',
        title: 'Cases',
        type: 'collapse',
        icon: 'feather icon-tablet',
        children: [
          {
            id: 'search-cases',
            title: 'Search',
            type: 'item',
            url: '/cases/search',
            icon: 'feather icon-search'
          },
          {
            id: 'new-case',
            title: 'Add',
            type: 'item',
            url: '/cases/new',
            icon: 'feather icon-plus'
          },
        ]
      },
      {
        id: 'documents',
        title: 'Documents',
        type: 'collapse',
        icon: 'feather icon-folder',
        children: [
          {
            id: 'search-documents',
            title: 'Search',
            type: 'item',
            url: '/documents/search',
            icon: 'feather icon-search'
          },
          {
            id: 'new-document',
            title: 'Add',
            type: 'item',
            url: '/documents/new',
            icon: 'feather icon-plus'
          },
        ]
      },

    ]
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
