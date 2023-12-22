import { TbSocial } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { BgImage } from "../assets";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/slice/authSlice";
import { useForm } from "react-hook-form";

const Register = () => {
  const dispatch = useDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      "First Name": firstName,
      "Last Name": lastName,
      "Email Address": email,
      Password: password,
    } = data;

    const transformedData = { firstName, lastName, email, password };
    console.log(transformedData);

    const response = await dispatch(register(transformedData));
    console.log(response);

    // Now you have the keys transformed as you wanted
  };

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] " font-semibold>
              ShareFun
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">
            Create your account
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-8 flex flex-col gap-5"
          >
            {/* First Name */}
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <div className="w-full">
                <TextInput
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  styles="w-full"
                  label="First Name"
                  register={formRegister}
                  required="true"
                />
              </div>
            </div>
            {/* Last Name */}
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <div className="w-full">
                <TextInput
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  styles="w-full"
                  label="Last Name"
                  register={formRegister}
                  required="true"
                />
              </div>
            </div>
            {/* Email */}
            <div className="w-full">
              <TextInput
                id="email"
                type="email"
                placeholder="email@example.com"
                styles="w-full"
                label="Email Address"
                register={formRegister}
                required="true"
              />
            </div>
            {/* Password */}
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <div className="w-full">
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  styles="w-full"
                  label="Password"
                  register={formRegister}
                  required="true"
                />
              </div>
            </div>
            {/* CustomButton for form submission */}
            <CustomButton
              type="submit"
              containerStyles="inline-flex justify-center rounded-md bg-blue-500 px-8 py-3 text-sm font-medium outline-none hover:bg-blue-600"
              title="Create Account"
            />
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#065ad8] font-semibold ml-2">
              Login
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden bg-blue-500 w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue">
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

export default Register;
