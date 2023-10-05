"use client";
import { SubmitButton } from "@/components/shadcn/shadecncomponents/button";
import {
  StateFullPasswordInputLabel,
  StateFullTextInputLabel,
} from "@/components/shared/input/statefullinput";
import { handelPasswordEye } from "@/lib/password-toggle";
import { sendRequest } from "@/lib/sendrequest";
import { ResponseAuthType, authErrorType } from "@/types/auth/auht.type.";
import { Home, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
const SignInForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<authErrorType>({});

  // Hooks
  const { trigger } = useSWRMutation("/api/auth/sign-in", sendRequest);

  // String states
  const [authState, setAuthState] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const reset = () => {
    return setAuthState({
      email: "",
      password: "",
    });
  };

  // Boolean states
  const [seePassWord, setSeePassWord] = useState<boolean>(false);

  // Toggle between see the password or hide it
  const handleOnSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result: ResponseAuthType = await trigger(authState);
      console.log("🚀 ~ file: page.tsx:49 ~ handleOnSubmit ~ result:", result);
      if (result.status === 200) {
        setLoading(false);
        reset();
        setError({});
        signIn("credentials", {
          email: authState.email,
          password: authState.password,
          callbackUrl: "/",
          redirect: true,
        });
      } else {
        setLoading(false);
        setError(result.message);
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        console.log(error);
        reset();
      } else {
        setError({});
        reset();
      }
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        {/* <div className="p-3 border bg-green-50">
          <p className=" text-green-600">
            "Account created successfully, Now login"
          </p>
        </div> */}

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Create Account
          </h2>
          <Link
            href="/"
            className="px-4 py-2 bg-primary text-white flex items-center"
          >
            <Home className="w-4 h-4 mr-2 " /> Home
          </Link>
        </div>
        <p className="mt-2 text-base text-gray-600">
          Don't have account yet?{" "}
          <Link
            href="/auth/sign-up"
            title=""
            className="text-black transition-all duration-200 underline font-semibold italic"
          >
            Create New
          </Link>
        </p>
        <form className="" onSubmit={handleOnSubmit}>
          <div className="mt-5">
            <StateFullTextInputLabel
              disabled={false}
              inputValue={authState.email}
              handleOnChange={(e) =>
                setAuthState({ ...authState, email: e.target.value })
              }
              iconComponent={<Mail strokeWidth={0.5} className="w-5 h-5" />}
              nameText="email"
              placeholderText="your email"
              requiredType={true}
              title="Your email, which we can reach you"
              type="email"
              labelTex="Email"
              top="[0.7rem]"
            />
            <span className="italic text-red-500 text-xs">{error.email}</span>
          </div>
          <div
            className="mt-5 relative"
            style={{
              overflow: "hidden",
            }}
          >
            <button className="absolute right-0 bottom-0 py-2.5 px-5 bg-transparent text-brand font-bold z-10">
              Send
            </button>
          </div>
          <div className="mt-5">
            <StateFullPasswordInputLabel
              inputValue={authState.password}
              handleOnChange={(e) =>
                setAuthState({ ...authState, password: e.target.value })
              }
              labelTex="Password"
              nameText="Password"
              onClickFunc={() =>
                handelPasswordEye("seePassword", seePassWord, setSeePassWord)
              }
              placeholderText="***"
              requiredType={true}
              seePassword={seePassWord}
              title=""
            />
            <span className="italic text-red-500 text-xs">
              {error.password}
            </span>
          </div>

          <div className="mt-10"></div>
          <SubmitButton loading={loading} loadingText="Signin up . . .">
            Sign up
          </SubmitButton>
          <p className="mt-10">
            Forget password? Don&#39;t wary
            <Link
              href="/auth/login"
              className="italic underline-offset-1 underline ml-2"
            >
              Click here
            </Link>
          </p>
        </form>
        <div className="mt-3 space-y-3">
          <button
            onClick={() => signIn("google")}
            type="button"
            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <svg
                className="h-6 w-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Sign up with Google
          </button>
          <button
            type="button"
            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <svg
                className="h-6 w-6 text-[#2563EB]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </span>
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
