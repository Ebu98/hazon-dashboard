import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Home from './components/home'

function App() {
  
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
      
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="invest" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  )
}

export default App