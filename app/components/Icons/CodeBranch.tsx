import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

interface CodeBranchIconProps {
  className?: string;
}

export const CodeBranch = ({ className = '' }: CodeBranchIconProps) => {
  return <FontAwesomeIcon icon={faCodeBranch} className={className} />;
};
