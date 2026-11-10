import triexperienceImage from './Triexperience.jpeg'
import coloniaImage from './Colonia.jpeg'
import lasCanasImage from './Las Cañas.jpeg'

function Triexperience() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-labelledby="triexperience-title">
      <header className="mx-auto w-full max-w-3xl text-center">
        <h1 id="triexperience-title" className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Triexperience
        </h1>
        <img
          src={triexperienceImage}
          alt="Portada de Triexperience"
          className="mx-auto h-auto w-full rounded-2xl bg-white object-contain shadow-md"
        />
      </header>

      <div className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        <button
          type="button"
          className="group flex w-full flex-col overflow-hidden rounded-2xl border border-lime-400/40 bg-white text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
        >
          <img
            src={coloniaImage}
            alt="Half Colonia"
            className="h-64 w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex w-full flex-1 flex-col items-center justify-center gap-2 bg-lime-50 px-4 py-5 text-lime-900">
            <span className="text-xl font-extrabold">Half Colonia</span>
            <span className="text-sm font-semibold">7 de febrero de 2027</span>
          </span>
        </button>

        <button
          type="button"
          className="group flex w-full flex-col overflow-hidden rounded-2xl border border-lime-400/40 bg-white text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
        >
          <img
            src={lasCanasImage}
            alt="Half Las Cañas"
            className="h-64 w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex w-full flex-1 flex-col items-center justify-center gap-2 bg-lime-50 px-4 py-5 text-lime-900">
            <span className="text-xl font-extrabold">Half Las Cañas</span>
            <span className="text-sm font-semibold">25 de abril de 2027</span>
          </span>
        </button>
      </div>
    </section>
  )
}

export default Triexperience