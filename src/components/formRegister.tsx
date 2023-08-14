'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Footer from "./footer";

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    signIn(undefined, {callbackUrl: '/'});
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-[calc(100vh-54px)] w-screen justify-center align-middle">
        <div className="flex flex-col space-y-3 justify-center">
          <h1
            className="text-center"
            style={{
              fontSize: "25px",
            }}
          >
            Cadastro
          </h1>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Nome"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
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
            <button className="btn btn-active btn-secondary mt-2" type="submit">Cadastrar</button>
            <Link className="flex flex-col max-w-xs" href={"/login"}>
              <button className="btn btn-active btn-primary">Voltar</button>
            </Link>
          </div>
        </div>
      </div>
      </form>
      <Footer />    
    </>
  );
}
