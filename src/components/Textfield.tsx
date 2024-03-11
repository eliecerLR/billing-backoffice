import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from "react";

interface TextfieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // New properties
  error?: boolean;
}

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
  const { className, error, ...inputProps } = props;

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
  ];

  const errorClasses = ["outline", "outline-input-error", "outline-offset-0"];

  if (error) {
    errorClasses.forEach((classes: string) => {
      customClasses.push(classes);
    });
  }

  const classes = [...customClasses, className].filter(Boolean) as string[];

  return <input ref={ref} className={classes.join(" ")} {...inputProps} />;
});

Textfield.defaultProps = {
  type: "text",
};

export default Textfield;
