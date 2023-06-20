/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from '../../components/Layout';
import { BiUserCircle } from 'react-icons/bi';
import { TbBrandSamsungpass } from 'react-icons/tb';
import { ImSpinner9 } from 'react-icons/im';
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[80vh] mt-10">
        <div className="screen relative h-[700px] md:h-[600px] w-full md:w-[350px]  mt-10 mb-10">
          <div className="screen__content relative h-[100%]">
            <form className="w-full md:w-[320px] p-7 pt-[156px] -mt-8">
              <div className="py-5 px-0 relative">
                <BiUserCircle className=" absolute top-8 text-slate-400" />
                <input
                  type="text"
                  className="login__input border-b-2 bg-none p-3 pl-6 font-bold w-[75%]"
                  placeholder="User name / Email"
                />
              </div>
              <div className="py-5 px-0 relative">
                <TbBrandSamsungpass className=" absolute top-8 text-slate-400" />
                <input
                  type="password"
                  className="login__input border-b-2 bg-none p-3 pl-6 font-bold w-[75%]"
                  placeholder="Password"
                />
              </div>
              <button className="button login__submit bg-white text-sm mt-8 rounded-3xl font-bold flex items-center w-full cursor-pointer px-5 py-4 text uppercase text-slate-500 gap-5 ">
                <ImSpinner9 size={22} className="mt-1" />
                <span className="button__text">Log In Now</span>
              </button>
            </form>

            <p className="font-semibold flex justify-center items-center text-black ">
              Already have account?{' '}
              <Link to="/login" className="text-red-700 cursor-pointer">
                Login
              </Link>
            </p>

            <div className=" absolute h-[140px] w-[160px] text-center bottom-0 right-0 text-white">
              <h3 className="mt-14">log in via</h3>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="py-5 px-3 hover:scale-150 text-white no-underline fab fa-instagram"
                >
                  <BsGoogle size={22} />
                </a>
                <a
                  href="#"
                  className="py-5 px-3 hover:scale-150 text-white no-underline fab fa-instagram"
                >
                  <BsFacebook size={22} />
                </a>
                <a
                  href="#"
                  className="py-5 px-3 hover:scale-150 text-white no-underline fab fa-instagram"
                >
                  <BsTwitter size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="screen__background absolute top-0 right-0 left-0 bottom-0 z-0">
            <span className="rotate-45 absolute h-[400px] w-[200px] bg-[#7e7bb9] top-[420px] right-[50px] rounded-[60px] " />
            <span className="rotate-45 absolute shape3 h-[540px] w-[190px] -top-6 right-0 rounded-[32px]   " />
            <span className="rotate-45 absolute h-[220px] w-[220px] bg-[#6c63ac] top-[-172px] right-0 rounded-[32px]" />
            <span className="rotate-45 absolute shape1 h-[520px] w-[520px] bg-white top-[-50px] right-[120px] " />
          </div>
        </div>
      </div>{' '}
      <div className="mt-[250px] md:mt-[150px]"></div>
    </Layout>
  );
};

export default SignUp;
