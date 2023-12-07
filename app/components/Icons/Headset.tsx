import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

interface HeadsetIconProps {
  className?: string;
}

export const Headset = ({ className = '' }: HeadsetIconProps) => {
  return <FontAwesomeIcon icon={faHeadset} className={className} />;
};
