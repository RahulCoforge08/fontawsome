import DynamicIcon from './utils/getIconByName';

import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi Rahul....</div>
      <DynamicIcon iconName={'Warning2'} />
      <DynamicIcon iconName={'MoneyBill'} />
    </main>
  );
}
