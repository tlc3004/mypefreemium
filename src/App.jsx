import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [usuario] = useState({ nombre: "Juan Pérez", plan: "free" });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <header className="bg-white shadow p-4 mb-6">
        <h1 className="text-2xl font-bold text-blue-600">MYPE Freemium</h1>
        <p className="text-sm text-gray-600">Bienvenido, {usuario.nombre} | Plan: {usuario.plan}</p>
      </header>
      <main className="p-4">
        <Home />
      </main>
    </div>
  );
}

export default App;
