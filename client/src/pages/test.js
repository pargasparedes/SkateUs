import React from 'react';
import { gql } from "graphql-tag";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../utils/hook";
import { AuthContext } from "../context/authContext";


const REGISTER_TEST = gql`
    mutation Mutation(
        $inputTest: InputTest
    ) {
        registerTest(
            inputTest: $inputTest
        ) {
          name
          lastname
          email
          level
          comments
          video
        }
    }
`;

function Test(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function registerTestCallback() {
        registerTest();
    };

    const { onChange, values } = useForm(registerTestCallback, {
        name: "",
        lastname: "",
        email: "",
        level: "",
        comments: "",
        video: ""
    });

    const onSubmit = async data => { console.log(data); };

    const [ registerTest, { loading }] = useMutation(REGISTER_TEST, {
      update(proxy, { data: { registerTest: userData}}) {
        context.login(userData);
        navigate('/');
    },
    onError({ graphQLErrors }) {
        setErrors(graphQLErrors);
    },
    variables: { inputTest: values }
});

  return (
<div className='container w-6/12'>

      <div className="flex flex-col h-screen justify-center items-center">
          <div className=" max-w-6">
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl pb-6 text-center font-medium leading-6 text-gray-900">Test Submition Form</h3>
            </div>
          </div>
          <div className="mt-5 max-w-10 md:mt-0">
            <form onSubmit={onSubmit} method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        onChange={onChange}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        onChange={onChange}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        required
                        onChange={onChange}
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                        Level
                      </label>
                      <select
                        id="level"
                        name="level"
                        required
                        onChange={onChange}
                        autoComplete="level-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Intermediate</option>
                        <option>Novice</option>
                        <option>Junior</option>
                        <option>Senior</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          required
                          onChange={onChange}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                        Comments
                      </label>
                      <input
                        type="text"
                        name="comments"
                        id="comments"
                        autoComplete="comments"
                        onChange={onChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>

  )
}

export default Test