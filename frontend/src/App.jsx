import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/Home'
import Slip from './pages/Slip'
import DepartmentManger from './pages/depertmentManager'
import AdminPanel from './pages/AdminPanel'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='adminpanel' element={<AdminPanel></AdminPanel>}></Route>
        <Route path='slip/:token' element={<Slip></Slip>}></Route>
        <Route path='/department-manger' element={<DepartmentManger></DepartmentManger>}></Route>
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App