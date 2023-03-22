import Link from 'next/link';
import React from 'react';
import clsx from 'classnames';
import { FeatherIconsTypes } from '@utils/types';
import { useRouter } from 'next/router';
import DynamicFeatherIcon from '../Icons/DynamicFeatherIcon';

type Props = {
  href: string;
  name: string;
  icon: FeatherIconsTypes;
};

function SidebarItem(props: Props) {
  const { href, name, icon } = props;
  const { pathname } = useRouter();

  // const pathArr = typeof activePaths === ''

  const sidebarItemClsx = clsx('sidebar-item', {
    active: href === pathname,
  });

  return (
    <li className={sidebarItemClsx}>
      <Link className="sidebar-link" href={href}>
        <DynamicFeatherIcon className="align-middle" name={icon} size={18} />
        <span className="align-middle ms-1">{name}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
