import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SearchPageSkins from './components/buscarSkins'
import SearchPageStikers from './components/buscarStikers'
import Skins from './skins'
import Stikers from './stikers'
import Login from './pages/Login'
import Register from './pages/Register'


function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/Skins" element={<Skins />} ></Route>
            <Route path="/Stikers" element={<Stikers />} ></Route>
            <Route path="/BuscarSkins" element={<SearchPageSkins />} ></Route>
            <Route path="/BuscarStikers" element={<SearchPageStikers />} ></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  {/* Definindo a rota de registro */}

            {/* Rotas protegidas */}
            <Route element={<PrivateRoute roles={['user', 'admin']} />}>
                <Route path="/profile" element={<Profile />} />
            </Route>

            <Route element={<PrivateRoute roles={['admin']} />}>
                <Route path="/admin" element={<Admin />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes