import { forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import LoadingIcon from '../../public/assets/auth/loading-icon.svg';

interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // New properties
  loading?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const { className, loading, children, ...inputProps } = props;

    const customClasses = [
      'flex',
      'justify-center',
      'bg-monoc-cyan-700',
      'text-original-bone',
      'active:bg-original-cyan',
      'active:text-original-dark-blue',
      'hover:scale-105',
      'focus-visible:outline-0',
      'focus-visible:scale-105',
      'ease-in',
      'duration-300',
      'w-full',
      'lg:w-80',
      'font-semibold',
      'text-xl',
      'rounded-lg',
      'p-2',
    ];

    const classes = [...customClasses, className].filter(Boolean) as string[];

    return (
      <button ref={ref} className={classes.join(' ')} {...inputProps}>
        {loading ? <LoadingIcon className="animate-spin" /> : children}
      </button>
    );
  }
);

CustomButton.defaultProps = {
  type: 'button',
  loading: undefined,
};

export default CustomButton;
