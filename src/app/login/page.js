import Link from 'next/link'

export default function Login() {
  return (
    <div className='flex h-screen w-screen justify-center align-middle'>
        <div className='flex flex-col space-y-3 justify-center'>
            <h1 className='text-center' style={{
                fontSize: '25px',
            }}>Login</h1>
            <input type="text" placeholder="E-mail" className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="text" placeholder="Senha" className="input input-bordered input-secondary w-full max-w-xs" />
            <div className='flex flex-col max-w-xs space-y-5'>
                <button className="btn btn-active btn-secondary mt-2">Entrar</button>
                <Link className='flex flex-col max-w-xs' href={'/register'}>
                    <button className="btn btn-active btn-primary">Cadastrar</button>
                </Link>
            </div>
        </div>        
    </div>
  )
}
