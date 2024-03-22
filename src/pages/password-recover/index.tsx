//main
import { FC, useState } from 'react';
import '../../../globals.css';

//Utilities
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

//Components
import Textfield from '../../components/Textfield';
import CustomButton from '../../components/CustomButton';

//assets
import PasswordIcon from '../../../public/assets/auth/light-password-icon.svg';
import ResetAvatar from '../../../public/assets/auth/password-reset-icon.svg';

interface passwordRecoverForm {
  email: string;
}

const passwordRecoverSchema = yup.object().shape({
  email: yup.string().email(),
});

const PasswordRecover: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [showNextStep, setShowNextStep] = useState(false);
  const formik = useFormik<passwordRecoverForm>({
    initialValues: {
      email: '',
    },
    validationSchema: passwordRecoverSchema,
    onSubmit: values => {
      try {
        console.log(formik.errors);
        if (showNextStep === false && values.email) {
          setShowNextStep(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleGoBack = () => {
    router.push('/login');
  };

  return (
    <div className="h-screen bg-[url('/assets/auth/password-reset-bg.svg')] bg-cover text-original-bone font-custom overflow-auto">
      <div className="w-full h-full flex">
        <div className="h-full lg:w-1/2 w-full flex flex-col text-original-cyan md:p-28 md:pt-40 p-10 lg:pt-60 lg:pr-40">
          <form
            action=""
            className="w-full flex flex-col items-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col items-center gap-5 pb-8">
              <PasswordIcon />
              <h1 className="text-3xl font-semibold text-center">
                {t('Auth.passwordReset')}
              </h1>

              {showNextStep ? (
                <p className="text-xl mt-2 text-center">
                  {t('Auth.matchDialog')}
                </p>
              ) : (
                <p className="text-xl mt-2 text-center">
                  {t('Auth.sendDialog')}
                </p>
              )}
            </div>

            {!showNextStep && (
              <div className="w-full lg:w-80 flex flex-col">
                <label htmlFor="email" className="block mb-2 text-sm">
                  {t('Auth.email')}
                </label>

                <Textfield
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.email && formik.touched.email && (
                  <p className="text-input-error text-sm">Email is not valid</p>
                )}
              </div>
            )}
            {showNextStep ? (
              <div className="w-full flex justify-center pt-10">
                <CustomButton onClick={handleGoBack}>
                  {t('Auth.redirectButton')}
                </CustomButton>
              </div>
            ) : (
              <div className="w-full flex justify-center pt-10">
                <CustomButton type="submit" disabled={!formik.values.email}>
                  {t('Auth.send')}
                </CustomButton>
              </div>
            )}
          </form>
        </div>
        <div className="hidden lg:flex w-1/2 justify-left items-center">
          <ResetAvatar className="mb-12" />
        </div>
      </div>
    </div>
  );
};
export default PasswordRecover;
