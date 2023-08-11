"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-[calc(100vh-54px)] w-screen justify-center ">
        <div className="flex flex-col space-y-3 justify-center">
          <h1
            className="text-center"
            style={{
              fontSize: "25px",
            }}
          >
            Login
          </h1>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="E-mail"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Senha"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <div className="flex flex-col max-w-xs space-y-5">
            <button className="btn btn-active btn-secondary mt-2" type="submit">
              Entrar
            </button>
            <Link className="flex flex-col max-w-xs" href={"/register"}>
              <button className="btn btn-active btn-primary">Cadastrar</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
