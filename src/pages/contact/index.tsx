import Head from 'next/head'
import { AuthLayout } from '@components/AuthLayout'
import { Button } from '@components/Button'
import { SelectField, TextField } from '@components/Fields'

export default function Register(): JSX.Element {
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <AuthLayout title="Hola! gracias por queres sumarte " subtitle="😁✌🏾">
        <form>
          <div className="grid grid-cols-2 gap-6">
            <SelectField
              className="col-span-full"
              label="Estas interesado en participar como"
              id="referral-source"
              name="referral_source"
            >
              <option>Soy Fundación</option>
              <option>Soy Empresa</option>
            </SelectField>
            <TextField
              className=""
              label="Nombre"
              id="first_name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              className=""
              label="Teléfono"
              id="last_name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              className="col-span-full"
              label="Dirección"
              id="address"
              name="address"
              type="text"
              required
            />
            <SelectField
              className="col-span-full"
              label="Cómo supiste de nosotros?"
              id="referral-source"
              name="referral_source"
            >
              <option>Instagram</option>
              <option>Referido por un amigo</option>
              <option>Twitter</option>
              <option>Publicidad en Google</option>
            </SelectField>
          </div>
          <Button type="submit" color="yellow" className="mt-8 w-full">
            Enviar Formulario
          </Button>
        </form>
      </AuthLayout>
    </>
  )
}
