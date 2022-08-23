import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";



export function Home() {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    };
    if (loading) return <h1>Cargando...</h1>
    return (
        <div className="container mx-auto">
            <section className="flex justify-center items-center h-screen bg-gray-800">
                <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
                    <h1 className="text-center font-bold text-xl text-white">Bienvenido {user.email}</h1>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-white text-center">Pronto tendras mas contenido aqui</h2>
                    </div>
                    <div>
                        <button onClick={handleLogout} className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Cerrar Sesion</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

