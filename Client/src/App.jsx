import style from './App.module.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/main/home/Hme';
import Products from './components/main/products/Products';

function App() {

  return (
    <div className={style.app}>
      <Header />

      {/* Content  */}
      <Home />
      <Products />
      {/* Content  */}

      <Footer />
    </div>
  )
}

export default App
