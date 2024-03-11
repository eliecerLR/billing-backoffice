//main
import { FC } from "react";
import "../../../globals.css";

//Utilities
import * as yup from "yup";
import { useFormik } from "formik";

//Components
import Textfield from "../../components/Textfield";
import Passwordfield from "../../components/PasswordField";
import CustomButton from "../../components/CustomButton";

//assets
import UserIcon from "../../../public/assets/auth/user.svg";
import GoogleIcon from "../../../public/assets/auth/google.svg";
import BusinessIcon from "../../../public/assets/auth/businessman.svg";

interface LogInForm {
  email: string;
  password: string;
}

const logInSchema = yup.object().shape({
  email: yup.string(),
  password: yup.string(),
});

const login: FC = () => {
  const formik = useFormik<LogInForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="h-screen bg-[url('/assets/auth/login-bg.svg')] bg-cover text-original-bone font-custom overflow-auto">
      <div className="w-full h-full flex">
        <div className="h-full lg:w-1/2 w-full flex flex-col text-original-cyan md:p-28 p-10 lg:pt-40">
          <form
            action=""
            className="w-full flex flex-col items-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col items-center gap-5 pb-8">
              <UserIcon />
              <h1 className="text-3xl font-semibold text-center">Welcome</h1>
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
              />

              <div className="w-full lg:w-80 flex flex-col mt-5">
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>

                <Passwordfield
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <a href="" className="self-end">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="w-full flex justify-center pt-10">
              <CustomButton type="submit">Login</CustomButton>
            </div>
          </form>

          <div className="flex flex-col w-full items-center mt-6 gap-5">
            <span className="text-base">Or</span>

            <button className="border-4 rounded-full p-3 active:border-monoc-cyan-700 hover:scale-105 focus-visible:scale-105 focus-visible:outline-0 ease-in duration-300 auth-google-button">
              <GoogleIcon className="google-icon" />
            </button>

            <a href="/signup" className="flex justify-center mt-3">
              <p>Don’t have account?</p>
              <p className="font-semibold">&nbsp;Register now</p>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 justify-center items-end">
          <BusinessIcon className="pl-4" />
        </div>
      </div>
    </div>
  );
};
export default login;
