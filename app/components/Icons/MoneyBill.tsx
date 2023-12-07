import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

interface MoneyBillIconProps {
  className?: string;
}

export const MoneyBill = ({ className = '' }: MoneyBillIconProps) => {
  return <FontAwesomeIcon icon={faMoneyBill} className={className} />;
};
