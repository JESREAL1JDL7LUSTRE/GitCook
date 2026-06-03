import './App.css'
import Featured from './components/Contents/Featured';
import Footer from './components/Contents/Footer';
import Layout2 from './components/Contents/Layout';
import Products from './pages/Products';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  return (
    <Layout2>
      {page === 1 && <Featured />}
      <Products />
      <Footer />
    </Layout2>
  )
}

export default App;
