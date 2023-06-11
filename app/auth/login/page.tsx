"use client";

import {
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

import { MailCheck } from "lucide-react";
const Login = () => {
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
      <div className="max-w-5xl border mx-auto rounded-md overflow-hidden">
        <section className="grid grid-cols-2">
          <div className="bg-[url('/assets/banners/login.webp')] bg-cover bg-center relative overflow-clip">
            <div className="px-16 py-20">
              <h3 className="text-2xl font-HIND_SILIGURI_LIGHT text-white mt-16 mb-8">
                Get access your Orders, <br /> Wishlist and Reconditions
              </h3>
              <p className="text-white mb-2">Don&#39;t have any account!</p>
              <Link href="/auth/sign-up">
                <LoginButton>Sign up</LoginButton>
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
                iconComponent={
                  <MailCheck strokeWidth={0.5} className="w-5 h-5" />
                }
                inputValue={email}
                nameText="email"
                placeholderText="your email"
                requiredType={true}
                title="Your email that you provided before for registered your account"
                type="email"
                labelTex="Email"
              />
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

export default Login;
