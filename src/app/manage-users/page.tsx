'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import { baseURL } from '@/lib/constants'

const ManageUsersPage = () => {

    const router = useRouter();
    const [cookie, setCookie] = useCookies(["user"]);
    const [users, setUsers] = useState<any[]>([]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const Email = formData.get('email')
        const Password = formData.get('password')

        const response = await fetch(`${baseURL}/auth/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email, Password }),
        })
        const body = await response.json()
        if (response.ok) {
            setCookie("user", JSON.stringify(body), {
                path: '/',
                sameSite: true,
            })
            router.push('/')
        } else {
            // handle error
        }
    }

    async function getUsers() {
        const response = await fetch(`${baseURL}/users?page=1&limit=2`);
        if (response.ok) {
            const body = await response.json()
            setUsers(body.users)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Quản lý người dùng</h2>

            <div className="mt-10 ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">STT</th>
                            <th scope="col" className="py-3 px-6">Email</th>
                            <th scope="col" className="py-3 px-6">Ngày hết hạn</th>
                            <th scope="col" className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <td className="py-4 px-6">{index + 1}</td>
                                <td className="py-4 px-6">{user.Email}</td>
                                <td className="py-4 px-6">{new Date(user.ExpireAt).toLocaleString()}</td>
                                <td className="py-4 px-6">
                                    <div className='flex space-x-2'>
                                        <button className='text-red-500 hover:text-white hover:bg-red-500 p-2 rounded'>Xóa</button>
                                        <button className='bg-blue-500 text-white hover:bg-blue-600 h-8 p-2 rounded'>Sửa</button>
                                        <button className='bg-blue-500 text-white hover:bg-blue-600 h-8 p-2 rounded'>Gia hạn</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUsersPage;
