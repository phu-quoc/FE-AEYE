'use client'

import { baseURL } from "@/lib/constants"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

const SignUpPage = () => {
  const router = useRouter();

  async function signup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const Email = formData.get('email')
    const Password = formData.get('password')
    const ConfirmPassword = formData.get('confirm-password')

    if (Password === ConfirmPassword) {
      const response = await fetch(`${baseURL}/auth/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, Password }),
      })
      const body = await response.json()
      if (response.ok) {
        router.push('/sign-in');
      } else {
        // handle error
      }
    } else {
      alert("Mật khẩu không khớp")
    }

  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Đăng ký</h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={signup}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Nhập lại mật khẩu</label>
            </div>
            <div className="mt-2">
              <input id="confirm-password" name="confirm-password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng ký</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Đã có tài khoản?
          <a href="sign-in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Đăng nhập</a>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage;
