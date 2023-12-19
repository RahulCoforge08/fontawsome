'use client'
import '@fortawesome/fontawesome-svg-core/styles.css';
import MenuAccordion from './components/MenuAccordion';
import styles from './SideMenu.module.scss';

import MenuListMockData from './MenuListMockData.json';

export default function Home() {
  const menuListData = MenuListMockData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi Rahul....</div>
      <MenuAccordion data={menuListData} showIcons={true} />
    </main>
  );
}
