import myAvatar from "../assets/myAvatar.png"

function Footer() {
  return (
    <footer className="mt-auto w-full bg-black py-4 text-lime-400">
      
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-3">
        <div className="text-left">
          <h3 className="text-base font-semibold">
            <span className="text-white">Time</span> Experience
          </h3>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide">Contacto</p>
          <p className="mt-1 text-xs sm:text-sm">Omar Gonnet</p>
          <p className="text-xs sm:text-sm">Cel. 099 565 595</p>
        </div>

        <div className="flex items-center justify-center text-center"></div>

        <div className="text-left md:text-right">
          <img
            src={myAvatar}
            alt="Avatar de Cecilia Perdomo"
            className="mb-2 h-10 w-10 rounded-full object-cover ring-1 ring-lime-400/50 md:ml-auto"
          />
          <p className="text-xs sm:text-sm">
            Desarrollo web:{" "}
            <a
              href="https://portfolio-cecilia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline"
            >
              Cecilia Perdomo
            </a>
          </p>
          <p className="mt-1 text-xs sm:text-sm">cecilia.perdomo@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer