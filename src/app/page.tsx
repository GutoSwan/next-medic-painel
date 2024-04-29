function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 overflow-hidden">
      <div className="container max-w-xl w-full p-6 bg-white rounded-lg">
        <form>
          <h1 className="text-blue-500 text-3xl font-bold mb-4">Hospital S</h1>
          <hr className="bg-blue-500 h-2 mb-4 bg-gradient-to-b from-cyan-500 to-blue-700 flex flex-col items-center" />
          <label htmlFor="email" className="block text-black mb-2">
            E-mail:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="block w-full px-4 py-2 mb-4 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300"
          />
          <label htmlFor="password" className="block text-black mb-2">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="block w-full px-4 py-2 mb-4 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300"
          />
          <input
            type="submit"
            value="Enviar"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-lg font-bold hover:bg-blue-600 bg-gradient-to-b from-cyan-500 to-blue-700 flex flex-col items-center"
          />
          <a className="text-blue-500 hover:underline" href="">
            Esqueci minha senha
          </a>
        </form>
      </div>
    </div>
  )
}

export default Login
