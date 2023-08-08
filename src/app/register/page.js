import Link from "next/link";

export default function Register() {
  return (
    <div className="flex h-screen w-screen justify-center align-middle">
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
          placeholder="Nome"
          class="input input-bordered input-secondary w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="E-mail"
          class="input input-bordered input-secondary w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Senha"
          class="input input-bordered input-secondary w-full max-w-xs"
        />
        <div className="flex flex-col max-w-xs space-y-5">
          <button class="btn btn-active btn-secondary mt-2">Cadastrar</button>
          <Link className="flex flex-col max-w-xs" href={"/login"}>
            <button className="btn btn-active btn-primary">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
