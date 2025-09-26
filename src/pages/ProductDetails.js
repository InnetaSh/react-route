import { useParams } from 'react-router-dom';

import ProductsList from '../data/product.js';

export default function ProductDetails() {
  const { id } = useParams(); 

  const product = ProductsList.find(p => p.id === id);

  if (!product) {
    return <p>Продукт не найден.</p>;
  }

  return (
    <div className='card-details'>
      <h2>{product.name}</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Описание:</strong> {product.description}</p>
    </div>
  );
}