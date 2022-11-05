import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hook";
import { useMutation } from "@apollo/react-hooks";
import { LockClosedIcon } from '@heroicons/react/20/solid'

import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";

const LOGIN_USER = gql`
    mutation login(
        $loginInput: LoginInput
    ) {
        loginUser(
            loginInput: $loginInput
        ) {
            email
            username
            token
        }
    }
`

function Login(props) {
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [ errors, setErrors ] = useState([]);

    function loginUserCallback() {
        loginUser();
    }

    const {onChange, onSubmit, values} = useForm(loginUserCallback, {
        email: '',
        password: ''
    });

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData}}) {
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { loginInput: values }
    });

    return (
      <>
      <div className=" loginBg bg-cover flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className=" font-thin mt-6 text-center text-4xl tracking-tight text-[#00477A]">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit} method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={onChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#00477A] focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChange}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {errors.map(function(error){
                return (
                    <div className=" text-center ">
                        <span className="text-red-500">
                            {error.message}
                        </span>
                    </div>
                )
            })}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/register" className="font-medium text-[#00477A] hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit" 
                
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#00477A] py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                
                  <LockClosedIcon className=" font-thin h-5 w-5 text-blue-400 group-hover:text-blue-500" aria-hidden="true" />
                </span>
                <p className="font-thin text-xl">Sign In</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

    )
}

export default Login;