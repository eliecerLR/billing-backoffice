import { forwardRef, DetailedHTMLProps, HTMLAttributes } from "react";

interface ErrorTextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // New properties
}

const ErrorText = forwardRef<HTMLInputElement, ErrorTextProps>((props, ref) => {
  const { className, ...inputProps } = props;

  const customClasses = [
    "text-sm",
    "font-normal",
    "text-input-error",
    "w-full",
    "pl-3",
    "pt-2"
  ];

  const classes = [...customClasses, className].filter(Boolean) as string[];

  return <p ref={ref} className={classes.join(" ")} {...inputProps} />;
});

ErrorText.defaultProps = {};

export default ErrorText;
