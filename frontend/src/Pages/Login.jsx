import { useState } from 'react';
import { Link } from 'react-router';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const submitData = () => {};

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#232323] font-Poppins">
      <div className="Container w-[480px] h-fit bg-white rounded-xl p-10 ">
        <div className="heading space-y-8">
          <h1 className="text-center font-semibold tracking-wider text-3xl text-blue-600">
            {' '}
            Login Form{' '}
          </h1>
          <form
            onClick={submitData}
            className="w-full h-full space-y-8 flex items-center justify-center flex-col"
          >
            <div className="fullName w-full h-10 border-b-2 border-blue-600">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-full outline-none"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                value={loginData.email}
              />
            </div>
            <div className="fullName w-full h-10 border-b-2 border-blue-600">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-full outline-none"
                onClick={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                value={loginData.password}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-2xs py-3 text-xl tracking-wider font-medium cursor-pointer rounded-md"
            >
              Login
            </button>
          </form>

          <p className="space-y-8 text-center">
            Create a account?{' '}
            <Link
              className="text-blue-600 font-medium hover:border-b"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
