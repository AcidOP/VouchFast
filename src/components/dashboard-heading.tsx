import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
  text: string;
}

const DashboardHeading = ({ className, text }: IProps) => {
  return <h2 className={cn('text-4xl font-bold', className)}>{text}</h2>;
};

export default DashboardHeading;
