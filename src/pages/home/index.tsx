import { useState, useEffect, FC } from 'react';
import '../../../globals.css';
import ApiService from '@/http/httpService';

const empresas = [
  {
    nombre: 'Empresa 1',
    imagen: 'https://picsum.photos/200',
  },
  {
    nombre: 'Empresa 2',
    imagen: 'https://picsum.photos/200',
  },
  {
    nombre: 'Empresa 3',
    imagen: 'https://picsum.photos/200',
  },
];

const fetchData = async () => {
  const apiService = new ApiService();
  const res = await apiService.get(
    '/v2/pokemon/',
    {},
    {
      limit: '20',
      offset: '0',
    }
  );
  if (res.success) {
    console.log('Datos recibidos:', res.data);
  } else {
    console.error('Error al recibir datos:', res.error);
  }
};

const Home: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
    const title = document.getElementById('title');
    const brands = document.getElementById('brands');
    title?.classList.add('animate-fadein');
    setTimeout(() => {
      brands?.classList.add('animate-fadein');
      brands?.classList.remove('hidden');
    }, 1250);
  }, []);

  return (
    <div className="font-custom h-screen flex flex-col pt-[15%] bg-original-dark-blue text-original-sky">
      <h1 id="title" className="text-3xl text-center mb-10 fade-in-from-left">
        ¿A qué empresa deseas acceder?
      </h1>
      <div id="brands" className="flex justify-center hidden">
        {empresas.map((empresa, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-8 cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`rounded-full overflow-hidden w-24 h-24 transform ${
                hovered === index ? 'scale-125' : ''
              } transition-transform duration-400`}
            >
              <img
                src={empresa.imagen}
                alt={empresa.nombre}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className={`text-center mt-2`}>{empresa.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
