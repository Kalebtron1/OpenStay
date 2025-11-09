import React, { useState } from 'react';
// Asumiendo que usarás un ícono de candado para el formulario.
// Si usas Heroicons o lucide-react, puedes descomentar la importación.
// import { LockClosedIcon } from '@heroicons/react/24/outline'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión con:', { email, password });
    // Aquí iría la lógica de autenticación (ej. llamada a una API)
  };

  // --- Estilos de la Guía "Modern Loft" Aplicados ---

  // Color Primario de Acción: #00C853 (bg-action-primary)
  // Fondo Base: #FFFFFF (bg-base-background)
  // Texto Principal: #212121 (text-primary)
  // Borde/Separador: #EEEEEE (border-divider)
  // Tipografía: Montserrat/Inter/Roboto (Asumido por la configuración de Tailwind)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-md">
        {/* Card Principal: Aplicando redondeo prominente (8px-12px) y sombra sutil */}
        <div 
          className="bg-base-background p-8 sm:p-10 rounded-xl shadow-lg 
                     border border-divider"
        >
          <div className="mb-8 text-center">
            {/* H1 (Título de Página): 28px-32px, Semi-Negrita (600) */}
            <h1 className="text-3xl font-semibold text-primary mb-2">
              Bienvenido a OpenStay
            </h1>
            <p className="text-secondary text-base">
              Inicia sesión en tu cuenta
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Campo de Correo Electrónico */}
            <div className="mb-5">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-primary mb-2"
              >
                Correo Electrónico
              </label>
              {/* Input: Redondeo suave (4px-6px), Borde sutil, Focus en color primario */}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-divider rounded-md 
                           text-primary focus:outline-none focus:ring-1 
                           focus:ring-action-primary transition duration-150"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>

            {/* Campo de Contraseña */}
            <div className="mb-6">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-primary mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-divider rounded-md 
                           text-primary focus:outline-none focus:ring-1 
                           focus:ring-action-primary transition duration-150"
                placeholder="••••••••"
              />
            </div>

            {/* Botón Principal (CTA): Fondo Primario de Acción, Redondeo suave */}
            <button
              type="submit"
              className="w-full bg-action-primary text-white font-medium 
                         py-3 rounded-md transition duration-200 
                         hover:bg-action-primary/90 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-action-primary shadow-md 
                         text-base"
              // Sombra sutil aplicada con 'shadow-md' de Tailwind, 
              // que simula el box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Enlaces de Ayuda */}
          <div className="mt-6 text-center text-sm">
            <a 
              href="/forgot-password" 
              className="text-secondary hover:text-action-primary transition duration-150"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <p className="mt-3 text-secondary">
              ¿No tienes una cuenta?{' '}
              <a 
                href="/register" 
                className="text-action-primary font-medium hover:underline"
              >
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;