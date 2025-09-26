import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Layout from './components/Layout';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';



export default function App(){
  return(
    <Routes>
      <Route element={<Layout />}>
      
      <Route index element={<Home/>}/>

       <Route path='about' element={<About/>}/>

      <Route path='products' element={<Products/>}>
        <Route index element={<div className="card-info">
                    <h3>В каталоге представлены товары на любой вкус и бюджет:</h3>

                    <p>💻 Модели ноутбуков для учёбы, работы и гейминга</p>

                    <p>🎧 Разнообразные наушники — проводные, беспроводные, с шумоподавлением</p>

                    <p>⌨️ Клавиатуры и мыши — как классические, так и игровые</p>

                    <p>📱 Смартфоны и планшеты от популярных брендов</p>

                    <p>🖥️ Мониторы — от базовых до профессиональных 4K</p>

                    <p>📡 Умные устройства и аксессуары для вашего дома и офиса</p>

                    <p><b>🔍 Используйте удобный поиск и фильтры, чтобы быстро найти подходящую модель. А если вы не уверены в выборе — всегда можно ознакомиться с подробным описанием каждого товара</b></p>
                </div>}/>
        <Route path=':id' element={<ProductDetails/>}/> 
      </Route>
          

      <Route path='*' element={<NotFound/>}/>

      </Route>
    </Routes>
  )
}