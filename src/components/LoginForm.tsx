"use client";
import React, { useState } from "react";
import { loginAction } from "@/data/actions/auth/loginAction";
import { useFormState } from "react-dom";

const INITIAL_STATE = {
  apiErrors: null,
  data: null,
  message: null,
};

function LoginForm() {
  const [formState, formAction] = useFormState(loginAction, INITIAL_STATE);

  return (
    <form action={formAction} className="w-full">
      {formState.message && (
        <p className="text-base text-white py-2 px-3 bg-red-400 w-full my-2 text-center">
          {formState?.message}
        </p>
      )}
      <div className="mb-4 w-full flex flex-col items-start">
        <label className="w-full block text-base font-normal mb-2">
          username
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          type="text"
          id="username"
          name="username"
          placeholder="correo@correo.com"
          required
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-start">
        <label className="w-full block text-base font-normal mb-2">
          Contraseña
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
