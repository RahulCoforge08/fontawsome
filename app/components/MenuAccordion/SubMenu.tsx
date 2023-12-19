import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { SubMenuItem } from './MenuAccordion';

interface SubMenuProps {
  subMenu: SubMenuItem;
  styles: Record<string, string>;
}

const SubMenu = ({ subMenu, styles }: SubMenuProps) => (
  <li className={classNames(styles.menuItem)} key={subMenu.id}>
    <Link href={subMenu.link}>{subMenu.title}</Link>
  </li>
);

export default SubMenu;
