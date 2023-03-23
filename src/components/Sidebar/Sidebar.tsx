/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SimpleBar from 'simplebar-react';
import clsx from 'classnames';
import { useAdminLayoutContext } from '@utils/context/AdminLayoutContext';
import SidebarBrand from './SidebarBrand';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';

type Props = {};

export default function Sidebar({}: Props) {
  const scrollableNodeRef = React.createRef<any>();
  const ref = React.useRef<any>();

  const { openSidebar } = useAdminLayoutContext();

  React.useEffect(() => {
    ref?.current?.recalculate();
  }, []);

  const sidebarClassName = clsx('sidebar', {
    collapsed: openSidebar,
  });
  return (
    <nav id="sidebar" className={sidebarClassName}>
      <SimpleBar
        scrollableNodeProps={{ ref: scrollableNodeRef }}
        // forceVisible="y"
        className="sidebar-content border-dark  "
      >
        <SidebarBrand />
        <ul className="sidebar-nav">
          <SidebarHeader title="Pages" />
          <SidebarItem name="Dashboard" icon="Sliders" href="/" />
          <SidebarItem name="Profile" icon="User" href="/pages-profile" />
          <SidebarItemCollapse
            name="Auth"
            icon="Users"
            links={[
              {
                name: 'Sign In',
                href: '/pages-sign-in',
              },
              {
                name: 'Sign Up',
                href: '/pages-sign-up',
              },
            ]}
          />
          <SidebarItem name="Blank" icon="Book" href="/pages-blank" />
          {/* Tools & Components */}
          <SidebarHeader title="Tools & Components" />
          <SidebarItem name="Buttons" icon="Square" href="/ui-buttons" />
          <SidebarItem name="Forms" icon="CheckSquare" href="/ui-forms" />
          <SidebarItem name="Cards" icon="Grid" href="/ui-cards" />
          <SidebarItem
            name="Typography"
            icon="AlignLeft"
            href="/ui-typography"
          />
          <SidebarItem name="Icons" icon="Coffee" href="/ui-feather" />
          {/* Plugins & Addons */}
          <SidebarHeader title="Plugins & Addons" />
          <SidebarItem name="Charts" icon="BarChart2" href="/ui-feather" />
          <SidebarItem name="Maps" icon="Map" href="/ui-google" />
        </ul>
        <div className="sidebar-cta">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
            <div className="mb-3 text-sm">
              Are you looking for more components? Check out our premium
              version.
            </div>
            <div className="d-grid">
              <a href="upgrade-to-pro.html" className="btn btn-primary">
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </SimpleBar>
    </nav>
  );
}
