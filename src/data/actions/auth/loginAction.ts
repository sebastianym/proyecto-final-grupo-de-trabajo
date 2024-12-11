"use server";

import { loginService } from "@/data/services/auth/loginService";
import { config } from "../../config/cookieConfig";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (prevState: any, formData: FormData) => {
  let redirectPath: string | null = null;

  try {
    if (!formData.get("username") || !formData.get("password")) {
      return {
        ...prevState,
        apiErrors: null,
        message: "Por favor, ingresa tu usuario y contraseña.",
      };
    }

    const responseData = await loginService({
      username: formData.get("username"),
      password: formData.get("password"),
    });

    if (!responseData) {
      return {
        ...prevState,
        apiErrors: responseData.error,
        message: "Ocurrió un error. Por favor, intenta de nuevo.",
      };
    }

    console.log(responseData);

    if (responseData.message) {
      return {
        ...prevState,
        apiErrors: responseData.message,
        message: "Error al iniciar sesión.",
      };
    }

    if (responseData.accessToken) {
      cookies().set("accessToken", responseData.accessToken, config);
      cookies().set("refreshToken", responseData.refreshToken, config);
      console.log({
        accessToken: responseData.accessToken,
        refreshToken: responseData.refreshToken,
      });
      redirectPath = `/dashboard`;
    } else {
      redirectPath = `/`;
    }
  } catch (error) {
    throw error;
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
};
