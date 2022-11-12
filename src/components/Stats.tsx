export const Stats = () => {
  return (
    <div id="stats" className="bg-gray-50 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro 2022
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Logramos aportar en 6 jornadas de alimentación y Donación de
            diferentes implementos y alimentación para animales en situación de
            calle a través de fundaciones
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="flex w-full rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3 md:grid">
                <div className="flex w-full flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-3xl font-medium leading-6 text-gray-500">
                    6
                  </dt>
                  <dd className="order-1 text-base font-bold tracking-tight text-indigo-600">
                    Fundaciones
                  </dd>
                </div>
                <div className="flex w-full flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2  text-3xl  font-medium leading-6 text-gray-500">
                    35
                  </dt>
                  <dd className="order-1 text-base font-bold tracking-tight text-indigo-600">
                    Perros y Gatos
                  </dd>
                </div>
                <div className="flex w-full flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2  text-3xl  font-medium leading-6 text-gray-500">
                    280
                  </dt>
                  <dd className="order-1 text-base font-bold tracking-tight text-indigo-600">
                    Niños y Habitantes de Calle
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
