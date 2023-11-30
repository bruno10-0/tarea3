function App() {
  return (
    <div className="mx-auto my-8">
      <div className="max-w-2xl mx-auto bg-gray-800 text-white p-8 shadow-md rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-green-500">GeForce RTX 4090</h1>
        <h2 className="text-xl font-bold mb-4 text-green-400">RAPIDEZ Y MÁS</h2>
        <img
          className="mb-4 rounded-md max-w-full"
          src="https://i2.wp.com/assets.reedpopcdn.com/nvidia-geforce-rtx-4090-gpu.png/BROK/thumbnail/1600x900/format/jpg/quality/80/nvidia-geforce-rtx-4090-gpu.png"
          alt="GeForce RTX 4090"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p className="text-gray-300 mb-4">
          GeForce RTX® 4090 es la GPU GeForce definitiva. Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados por IA. Experimenta juegos de rendimiento ultra alto, mundos virtuales increíblemente detallados, productividad sin precedentes y nuevas formas de crear. Está impulsada por la arquitectura NVIDIA Ada Lovelace y viene con 24 GB de memoria G6X para brindar la mejor experiencia para jugadores y creadores.
        </p>
        <p className="text-lg font-bold mb-2 text-green-500">Precio: $2.672.000</p>
        <p className="text-gray-300 mb-2">SKU: ABC123</p>
        <p className="text-gray-300 mb-8">Cantidad Disponible: 50</p>
      </div>
    </div>
  );
}

export default App;






