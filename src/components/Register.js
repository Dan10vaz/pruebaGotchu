import { useState } from "react";
import { useAuth } from '../context/authContext.js';
import { useNavigate } from 'react-router-dom';


export function Register() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { signup } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="container mx-auto text-center">
            <form onSubmit={handleSubmit}>
                <section className="flex justify-center items-center h-screen bg-gray-800">
                    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="mb-4">
                            <p className="text-gray-400">Registrate</p>
                            <h2 className="text-xl font-bold text-white">Ingresa a nuestra comunidad</h2>
                        </div>
                        <div>
                            <label className="text-2xl font-bold text-white" htmlFor="email">Tu Email</label>
                            <input type="email" name="email" placeholder="dcva9565@hotmail.com" onChange={handleChange} className="mt-2 w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"></input>
                        </div>
                        <div>
                            <label className="text-2xl font-bold text-white" htmlFor="email">Tu Contraseña</label>
                            <input type="password" name="password" placeholder="******" id="password"
                                onChange={handleChange} className="mt-2 w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"></input>
                        </div>
                        <div>
                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Registrate</button>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}
