import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface DollarSignProps {
  className?: string;
}

export const DollarSign = ({ className = '' }: DollarSignProps) => {
  return <FontAwesomeIcon icon={faDollarSign} className={className} />;
};
