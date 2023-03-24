import { FeatherIconsTypes, ThemeTypes } from '@utils/types';

interface INavigationSubItems {
  name: string;
  href: string;
  badge?: string;
  bagdeColor?: ThemeTypes;
}

interface INavigationItem {
  name: string;
  icon: FeatherIconsTypes;
  href?: string;
  navSubItems?: INavigationSubItems[];
}

interface INavigation {
  [key: string]: {
    title: string;
    navItems: INavigationItem[];
  };
}

const navigationConfigs: INavigation = {
  pages: {
    title: 'Pages',
    navItems: [
      {
        name: 'Dashboard',
        icon: 'Sliders',
        href: '/',
      },
      {
        name: 'Profile',
        icon: 'User',
        href: '/pages-profile',
      },
      {
        name: 'Auth',
        icon: 'Users',
        navSubItems: [
          {
            name: 'Sign In',
            href: '/pages-sign-in',
          },
          {
            name: 'Sign Up',
            href: '/pages-sign-up',
          },
        ],
      },
      {
        name: 'Blank',
        icon: 'Book',
        href: '/pages-blank',
      },
    ],
  },
  toolsComponents: {
    title: 'Tools & Components',
    navItems: [
      {
        name: 'UI Elements',
        icon: 'Briefcase',
        navSubItems: [
          {
            name: 'Alerts',
            href: '/ui-alerts',
          },
          {
            name: 'Buttons',
            href: '/ui-buttons',
          },
          {
            name: 'Cards',
            href: '/ui-cards',
          },
        ],
      },
      {
        name: 'Forms',
        icon: 'CheckSquare',
        href: '/ui-forms',
      },
      {
        name: 'Icons',
        icon: 'Coffee',
        href: '/ui-feather',
      },
    ],
  },
  pluginsAddons: {
    title: 'Plugins & Addons',
    navItems: [
      {
        name: 'Toast',
        icon: 'Bell',
        href: '/toasts',
      },
      {
        name: 'Charts',
        icon: 'BarChart2',
        href: '/charts-chartjs',
      },
      {
        name: 'Map',
        icon: 'Map',
        navSubItems: [
          {
            name: 'Google Map',
            href: '/map-google',
          },
          {
            name: 'JVectorMap',
            href: '/map-jvectormap',
          },
        ],
      },
    ],
  },
};

export default navigationConfigs;
