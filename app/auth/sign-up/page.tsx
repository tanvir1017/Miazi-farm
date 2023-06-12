"use client";

import {
  BlurredButton,
  LoginButton,
  SubmitButton,
} from "@/components/shadecncomponents/button";
import BrandLogo from "@/components/shared/brandlogo/brandlogo";
import {
  StateFullPasswordInputLabel,
  StateFullTextInputLabel,
} from "@/components/shared/input/statefullinput";
import Link from "next/link";

import { useState } from "react";

import { ChevronLeft, Mail, User, Verified } from "lucide-react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassWord, setSeePassWord] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handelPasswordEye = () => {
    if (seePassWord) {
      setSeePassWord(false);
    } else {
      setSeePassWord(true);
    }
  };

  return (
    <main className="container my-10">
      <div className="max-w-5xl border mx-auto rounded-xl shadow-md overflow-hidden">
        <section className="grid grid-cols-2">
          <div className="bg-[url('/assets/banners/login.webp')] bg-cover bg-center relative overflow-clip">
            <div className="px-16 py-20">
              <Link href="/">
                <BlurredButton>
                  <ChevronLeft strokeWidth={0.5} /> Home
                </BlurredButton>
              </Link>
              <h3 className="text-2xl font-HIND_SILIGURI_LIGHT text-white mt-16 mb-8">
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

            <form className="px-10 pt-10">
              <StateFullTextInputLabel
                disabled={false}
                handleOnChange={(e) => setEmail(e.target.value)}
                iconComponent={<User strokeWidth={0.5} className="w-5 h-5" />}
                inputValue={email}
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
                  handleOnChange={(e) => setEmail(e.target.value)}
                  iconComponent={
                    <Verified strokeWidth={0.5} className="w-5 h-5" />
                  }
                  inputValue={email}
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
                  onClickFunc={handelPasswordEye}
                  placeholderText="***"
                  requiredType={true}
                  seePassword={seePassWord}
                  title=""
                />
              </div>
              <div className="mt-5">
                <StateFullPasswordInputLabel
                  inputValue={password}
                  handleOnChange={(e) => setPassword(e.target.value)}
                  labelTex="Re-enter password"
                  nameText="re-enter_password"
                  onClickFunc={handelPasswordEye}
                  placeholderText="***"
                  requiredType={true}
                  seePassword={seePassWord}
                  title="Re enter password"
                />
              </div>
              <div className="mt-10"></div>
              <SubmitButton loading={loading} loadingText="Loging">
                Login
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
