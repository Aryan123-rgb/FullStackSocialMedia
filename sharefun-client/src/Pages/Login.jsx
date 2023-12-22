import React from "react";
import { Link } from "react-router-dom";
import { TbSocial } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
import TextInput from "../components/TextInput";
import { BgImage } from "../assets";
import CustomButton from "../components/CustomButton";
import { login } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { "Email Address": email, Password: password } = data;

    const transformedData = { email, password };
    console.log(transformedData);

    const response = await dispatch(login(transformedData));
    console.log(response);
  };
  return (
    <div className="bg-bgColor w-full h-screen flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              ShareFun
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-8 flex flex-col gap-5"
          >
            <TextInput
              id="email"
              type="email"
              placeholder="email@example.com"
              styles="w-full"
              label="Email Address"
              register={formRegister}
              required="true"
            />

            <TextInput
              id="password"
              type="password"
              placeholder="Password"
              styles="w-full"
              label="Password"
              register={formRegister}
              required="true"
            />

            <Link
              to="/reset-password"
              className="text-sm text-right text-blue-500 font-semibold"
            >
              Forgot Password ?
            </Link>

            <CustomButton
              type="submit"
              containerStyles="inline-flex justify-center rounded-md bg-blue-500 px-8 py-3 text-sm font-medium outline-none hover:bg-blue-600"
              title="Login"
            />
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden w-1/2 h-full bg-blue-500 lg:flex flex-col items-center justify-center bg-blue">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={BgImage}
              alt="Bg Image"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />

            <div className="absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full">
              <ImConnection />
              <span className="text-xs font-medium">Connect</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full">
              <AiOutlineInteraction />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-base">
              Connect with friedns & have share for fun
            </p>
            <span className="text-sm text-white/80">
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
