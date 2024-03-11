//Main
import { FC, useState } from "react";
import "../../../globals.css";

//Utilities
import * as yup from "yup";
import { useFormik } from "formik";

//Components
import Textfield from "../../components/Textfield";
import Passwordfield from "../../components/PasswordField";
import CustomButton from "../../components/CustomButton";
import ErrorText from "../../components/ErrorText";

//assets
import GoogleIcon from "../../../public/assets/auth/google.svg";
import StepUpIcon from "../../../public/assets/auth/step-up.svg";
import MailingIcon from "../../../public/assets/auth/email-illustration.svg";
import AddUserIcon from "../../../public/assets/auth/add-user.svg";
import EmailIcon from "../../../public/assets/auth/email.svg";

interface SignUpForm {
  email: string;
  password: string;
  confirmation: string;
}

const signUpSchema = yup.object().shape({
  email: yup.string().email("Invalid e-mail").required("The email is required"),
  password: yup
    .string()
    .min(8, "The password must be at least 8 characters")
    .required("The password is required"),
  confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "The passwords must match")
    .required("Password must be confirmed"),
});

const signup: FC = ({}) => {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const formik = useFormik<SignUpForm>({
    initialValues: {
      email: "",
      password: "",
      confirmation: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
        setIsSubmited(true);

        setTimeout(() => {
          const step1 = document.getElementById("step1");
          const step2 = document.getElementById("step2");
          const mailingIcon = document.getElementById("mailing");
          const stepUpIcon = document.getElementById("stepup");

          step1?.classList.add("fade-out");
          stepUpIcon?.classList.add("fade-out");
          setTimeout(() => {
            step1?.classList.add("hidden");
            stepUpIcon?.classList.add("hidden");
            step2?.classList.remove("hidden");
            mailingIcon?.classList.remove("hidden");
            step2?.classList.add("flex");
          }, 500);
        }, 1000);
      } catch (error) {
        setIsSubmited(false);
        console.log(error);
      }
    },
  });

  return (
    <div className="h-screen bg-[url('/assets/auth/sign-up-bg.svg')] bg-cover text-original-cyan font-custom overflow-auto">
      <div className="w-full h-full flex">
        <div
          className="h-full lg:w-1/2 w-full flex flex-col md:p-28 p-10 lg:pt-40"
          id="step1"
        >
          <form
            action=""
            className="w-full flex flex-col items-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col items-center gap-5 pb-8">
              <AddUserIcon />
              <h1 className="text-3xl font-semibold text-center">Sign up</h1>
            </div>

            <div className="w-full lg:w-80 flex flex-col">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <Textfield
                id="email"
                name="email"
                placeholder="example@mail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.email && formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
              ) : null}

              <label htmlFor="password" className="block mb-2 mt-5 text-sm">
                Password
              </label>
              <Passwordfield
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorText>{formik.errors.password}</ErrorText>
              ) : null}

              <label htmlFor="confirmation" className="block mb-2 mt-5 text-sm">
                Confirm password
              </label>
              <Passwordfield
                id="confirmation"
                name="confirmation"
                value={formik.values.confirmation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.confirmation && formik.errors.confirmation
                )}
              />
              {formik.touched.confirmation && formik.errors.confirmation ? (
                <ErrorText>{formik.errors.confirmation}</ErrorText>
              ) : null}
            </div>

            <div className="w-full flex justify-center pt-14">
              <CustomButton type="submit" loading={isSubmited}>
                Continue
              </CustomButton>
            </div>
          </form>

          <div className="flex flex-col w-full items-center mt-6 gap-5">
            <span className="text-base">Or</span>

            <button className="border-4 rounded-full p-3 active:border-monoc-cyan-700 hover:scale-105 focus-visible:scale-105 focus-visible:outline-0 ease-in duration-300 auth-google-button">
              <GoogleIcon className="google-icon" />
            </button>

            <a href="/login" className="flex justify-center mt-3">
              <p>Do you already have an account?</p>
              <p className="font-semibold">&nbsp;Log in</p>
            </a>
          </div>
        </div>
        <div
          className="h-full lg:w-1/2 w-full flex-col gap-14 items-center justify-center md:p-28 p-10 lg:pt-40 fade-in hidden"
          id="step2"
        >
          <EmailIcon />
          <p className="font-bold text-base text-center">
            You have been sent a message to verify your email address, please
            check your inbox
          </p>
          <CustomButton>Continue</CustomButton>
        </div>
        <div className="hidden lg:flex w-1/2 justify-normal items-center pl-20">
          <MailingIcon className="fade-in hidden" id="mailing" />
          <StepUpIcon id="stepup" />
        </div>
      </div>
    </div>
  );
};
export default signup;
