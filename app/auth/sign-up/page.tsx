"use client";

import BrandLogo from "@/components/shared/brandlogo/brandlogo";
import {
  StateFullPasswordInputLabel,
  StateFullTextInputLabel,
} from "@/components/shared/input/statefullinput";
import { sendRequest } from "@/lib/sendrequest";
import {
  BlurredButton,
  LoginButton,
  SubmitButton,
} from "@/shadcn/shadecncomponents/button";
import { ChevronLeft, Mail, User, Verified } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWRMutation from "swr/mutation";

const SignUp = () => {
  // Hooks
  const Router = useRouter();

  // String states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");

  // Boolean states
  const [seePassWord, setSeePassWord] = useState<boolean>(false);
  const [seeConfirmPassWord, setSeeConfirmPassWord] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Toggle between see the password or hide it
  const handelPasswordEye = (type: string) => {
    if (type !== "seeConfirmPassword") {
      if (seePassWord) {
        setSeePassWord(false);
      } else {
        setSeePassWord(true);
      }
    } else {
      if (seeConfirmPassWord) {
        setSeeConfirmPassWord(false);
      } else {
        setSeeConfirmPassWord(true);
      }
    }
  };

  // Trigger the request event
  const { trigger, isMutating } = useSWRMutation(
    "/api/auth/signup",
    sendRequest /* options */
  );

  // Form submission
  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (!email || !password || !name) {
      setLoading(false);
      toast("Please fill al of the required field", {
        icon: "⚠️",
      });
    } else {
      if (password !== cPassword) {
        setLoading(false);
        toast("password and confirm password didn't matched yet", {
          icon: "💡",
        });
      } else {
        try {
          setLoading(true);
          const result = await trigger({ name, email, password });
          if (!result.success) {
            setLoading(false);
            toast(`${result.message}`, {
              icon: "🤖",
            });
          } else if (result.success) {
            toast.success("account created successfully, Now login");
            setLoading(false);
            Router.push("/auth/login");
          }
        } catch (err) {
          toast.error("something went wrong, see the error to console");
          setLoading(false);
          console.log(err);
        }
      }
    }
  };

  return (
    <main className="container my-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-5xl border mx-auto rounded-xl shadow-md overflow-hidden">
        <section className="grid grid-cols-2">
          <div className="bg-[url('/assets/banners/login.webp')] bg-cover bg-center relative overflow-clip">
            <div className="px-16 py-20">
              <Link href="/">
                <BlurredButton>
                  <ChevronLeft strokeWidth={0.5} /> Home
                </BlurredButton>
              </Link>
              <h3 className="text-2xl  text-white mt-16 mb-8">
                Get access your Orders, <br /> Wishlist and Reconditions
              </h3>
              <p className="text-white mb-2">Already have an account ? </p>
              <Link href="/auth/login">
                <LoginButton>Login</LoginButton>
              </Link>
            </div>
          </div>
          <div className="py-8">
            <div className="px-16">
              <BrandLogo />
            </div>

            <form className="px-10 pt-10" onSubmit={handleOnSubmit}>
              <StateFullTextInputLabel
                disabled={false}
                inputValue={name}
                handleOnChange={(e) => setName(e.target.value)}
                iconComponent={<User strokeWidth={0.5} className="w-5 h-5" />}
                nameText="full_name"
                placeholderText="Full Name"
                requiredType={true}
                title="Your full name"
                type="text"
                labelTex="Full Name"
                top="[0.7rem]"
              />
              <div className="mt-5">
                <StateFullTextInputLabel
                  disabled={false}
                  handleOnChange={(e) => setEmail(e.target.value)}
                  iconComponent={<Mail strokeWidth={0.5} className="w-5 h-5" />}
                  inputValue={email}
                  nameText="email"
                  placeholderText="your email"
                  requiredType={true}
                  title="Your email, which we can reach you"
                  type="email"
                  labelTex="Email"
                  top="[0.7rem]"
                />
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
                <StateFullTextInputLabel
                  disabled={false}
                  inputValue={verificationCode}
                  handleOnChange={(e) => setVerificationCode(e.target.value)}
                  iconComponent={
                    <Verified strokeWidth={0.5} className="w-5 h-5" />
                  }
                  nameText="verification_code"
                  placeholderText="verification code"
                  requiredType={true}
                  title="enter the verification code that we sent to your  email"
                  type="text"
                  labelTex="Verification Code"
                  top="[0.7rem]"
                />
              </div>
              <div className="mt-5">
                <StateFullPasswordInputLabel
                  inputValue={password}
                  handleOnChange={(e) => setPassword(e.target.value)}
                  labelTex="Password"
                  nameText="Password"
                  onClickFunc={() => handelPasswordEye("seePassword")}
                  placeholderText="***"
                  requiredType={true}
                  seePassword={seePassWord}
                  title=""
                />
              </div>
              <div className="mt-5">
                <StateFullPasswordInputLabel
                  inputValue={cPassword}
                  handleOnChange={(e) => setCPassword(e.target.value)}
                  labelTex="Re-enter password"
                  nameText="re-enter_password"
                  onClickFunc={() => handelPasswordEye("seeConfirmPassword")}
                  placeholderText="***"
                  requiredType={true}
                  seePassword={seeConfirmPassWord}
                  title="Re enter password"
                />
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
