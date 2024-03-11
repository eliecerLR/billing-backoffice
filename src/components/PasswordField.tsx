import {
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import EyeIcon from "../../public/assets/auth/show-pass.svg";
import CloseEyeIcon from "../../public/assets/auth/unshow-pass.svg";

interface PasswordfieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // New properties
  error?: boolean;
}

const Passwordfield = forwardRef<HTMLInputElement, PasswordfieldProps>(
  (props, ref) => {
    const { className, error, ...inputProps } = props;
    const [isVisible, setIsVisible] = useState<Boolean>(false);

    const changePassVisibility = (e: any) => {
      e.preventDefault();
      setIsVisible((prevIsVisible) => !prevIsVisible);
    };

    const customClasses = [
      "bg-original-bone",
      "text-original-dark-blue",
      "focus-visible:outline",
      "focus-visible:outline-original-cyan",
      "focus-visible:outline-offset-4",
      "p-3",
      "w-full",
      "h-12",
      "rounded-lg",
      "pr-10",
    ];

    const errorClasses = ["outline", "outline-input-error", "outline-offset-0"];

    if (error) {
      errorClasses.forEach((classes: string) => {
        customClasses.push(classes);
      });
    }

    const classes = [...customClasses, className].filter(Boolean) as string[];

    return (
      <div className="relative inline-flex">
        <input
          ref={ref}
          className={classes.join(" ")}
          {...inputProps}
          type={isVisible ? "text" : "password"}
        />
        <button
          type="button"
          onClick={changePassVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {isVisible ? (
            <CloseEyeIcon className="hover:scale-105 ease-in duration-200" />
          ) : (
            <EyeIcon className="hover:scale-105 ease-in duration-200" />
          )}
        </button>
      </div>
    );
  }
);

Passwordfield.defaultProps = {};

export default Passwordfield;
