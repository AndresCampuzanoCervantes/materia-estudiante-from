import { Route, Routes } from 'react-router'
import { Home, Student, Subject } from './pages'
import { Layout } from './components';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      }
      />
      <Route path="/home" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/student" element={<Layout>
        <Student />
      </Layout>
      } />
      <Route path="/subject" element={<Layout>
        <Subject />
      </Layout>
      } />
    </Routes>
  )
}

export default App
