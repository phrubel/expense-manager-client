import Layout from '../../components/Layout';
import './Login.css';
import { BiUserCircle } from 'react-icons/bi';
import { TbBrandSamsungpass } from 'react-icons/tb';
import { ImSpinner9 } from 'react-icons/im';
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';
// https://codepen.io/Mohuth/pen/QWgrPvp

const Login = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="screen relative h-[600px] w-[350px]  mt-10 mb-10">
          <div className="screen__content relative h-[100%]">
            <form className=" w-[320px] p-7 pt-[156px]">
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
            <div className=" absolute h-[140px] w-[160px] text-center bottom-0 right-0 text-white">
              <h3>log in via</h3>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="py-5 px-3 text-white no-underline fab fa-instagram"
                >
                  <BsGoogle size={22} />
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-white no-underline fab fa-instagram"
                >
                  <BsFacebook size={22} />
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-white no-underline fab fa-instagram"
                >
                  <BsTwitter size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
