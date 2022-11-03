import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hook";
import { useMutation } from "@apollo/react-hooks";
import { LockClosedIcon } from '@heroicons/react/20/solid'

import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            name
            email
            username
            token
        }
    }
`

function Register(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function registerUserCallback() {
        registerUser();
    };

    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [ registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData}}) {
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { registerInput: values }
    });

    return (
        // <Container spacing={2} maxWidth="sm">
        //     <h3>Register</h3>
        //     <p>Register Below</p>
        //     <Stack spacing={2} paddingBottom={2}>
        //         <TextField 
        //             label="Full Name"
        //             name="name"
        //             onChange={onChange}
        //         />
        //         <TextField 
        //             label="Username"
        //             name="username"
        //             onChange={onChange}
        //         />
        //         <TextField 
        //             label="Email"
        //             name="email"
        //             onChange={onChange}
        //         />
        //         <TextField 
        //             label="Password"
        //             name="password"
        //             onChange={onChange}
        //         />
        //         <TextField 
        //             label="Confirm Password"
        //             name="confirmPassword"
        //             onChange={onChange}
        //         />
        //     </Stack>
        //     {errors.map(function(error){
        //         return (
        //             <Alert severity="error">
        //                 {error.message}
        //             </Alert>
        //         )
        //     })}
        //     <Button variant="contained" onClick={onSubmit}>Register</Button>
        // </Container>

        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    
                        <form className="mt-8 space-y-6" onSubmit={onSubmit} method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                Full Name
                                </label>
                                <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="sr-only">
                                Username
                                </label>
                                <input
                                id="username"
                                name="username"
                                type="username"
                                autoComplete="username"
                                onChange={onChange}
                                required
                                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="username"
                                />
                            </div>
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
                                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                                </a>
                            </div>
                            </div>

                            <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Create Account
                            </button>
                            </div>
                        </form>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>

    )
};

export default Register;