import { CircleBackground } from '@components/CircleBackground'

export function CallToAction() {
  return (
    <div className="relative m-8 rounded-2xl bg-yellow-700 lg:px-8">
      <div className="h-56 rounded-2xl bg-white sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full rounded-2xl object-cover "
          src="/assets/imgs/logos/logo.png"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">viiiiis 🙂</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Gracias por querer sumarte
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Estamos construyendo una plataforma segura que nos permita conectar
            personas y empresas como tú que quieren contribuir y apoyar a
            proyectos sociales y fundaciones
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Puedes registrarte aquí
                <CircleBackground
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
