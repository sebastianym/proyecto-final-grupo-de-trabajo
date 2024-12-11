import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg w-full p-5 border-2 max-w-xl">
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold mb-2">Iniciar Sesión</h1>
          <p className="text-base">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </div>
        <LoginForm />
        <div className="mt-6 text-center">
          <a href="#">¿Olvidaste tu contraseña?</a>
          <p>
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
}
