import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

interface BoxIconProps {
  className?: string;
}

export const BoxIcon = ({ className = '' }: BoxIconProps) => {
  return <FontAwesomeIcon icon={faBox} className={className} />;
};
