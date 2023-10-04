"use client";
import { SubmitButton } from "@/components/shadcn/shadecncomponents/button";
import {
  StateFullPasswordInputLabel,
  StateFullTextInputLabel,
} from "@/components/shared/input/statefullinput";
import { handelPasswordEye } from "@/lib/password-toggle";
import { sendRequest } from "@/lib/sendrequest";
import { ResponseAuthType, authErrorType } from "@/types/auth/auht.type.";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<authErrorType>({});
  // Hooks
  const { trigger } = useSWRMutation("/api/auth/sign-in", sendRequest);
  const router = useRouter();
  const searchParams = useSearchParams();

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
      if (result.status === 200) {
        setLoading(false);
        reset();
        setError({});
        router.push("/");
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

  const isAccountCreated = searchParams.get("authorized") ?? "";
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Now you don't have to rely on your designer to create a new page
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Commercial License{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Unlimited Exports{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    120+ Coded Blocks{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Design Files Included{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            {isAccountCreated && (
              <div className="p-3 border bg-green-50">
                <p className=" text-green-600">
                  "Account created successfully, Now login"
                </p>
              </div>
            )}
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign In
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have account yet?{" "}
              <Link
                href="/auth/sign-up"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
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
                <span className="italic text-red-500 text-xs">
                  {error.email}
                </span>
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
                    handelPasswordEye(
                      "seePassword",
                      seePassWord,
                      setSeePassWord
                    )
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
      </div>
    </section>
  );
};
export default SignIn;
