import React, { useState } from 'react';
// Si usas íconos, puedes importarlos aquí (ej. LockClosedIcon, UserIcon, etc.)

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('customer');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    console.log('Intentando registrar nuevo usuario:', { name, email, password });
    // Aquí iría la lógica de registro de usuario (ej. llamada a una API)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-md">
        {/* Card Principal: Redondeo prominente (xl: 12px) y sombra sutil */}
        <div 
          className="bg-base-background p-8 sm:p-10 rounded-xl shadow-lg 
                     border border-divider"
        >
          <div className="mb-8 text-center">
            {/* H1 (Título de Página): 28px-32px, Semi-Negrita (600) */}
            <h1 className="text-3xl font-semibold text-primary mb-2">
              Crea tu Cuenta
            </h1>
            <p className="text-secondary text-base">
              Únete a OpenStay hoy mismo
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Campo de Nombre Completo */}
            <div className="mb-5">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-primary mb-2"
              >
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-divider rounded-md 
                           text-primary focus:outline-none focus:ring-1 
                           focus:ring-action-primary transition duration-150"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Campo de Correo Electrónico */}
            <div className="mb-5">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-primary mb-2"
              >
                Correo Electrónico
              </label>
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
            <div className="mb-5">
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
                placeholder="Mínimo 8 caracteres"
              />
            </div>

            {/* Campo de Confirmar Contraseña */}
            <div className="mb-6">
              <label 
                htmlFor="confirm-password" 
                className="block text-sm font-medium text-primary mb-2"
              >
                Confirmar Contraseña
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-divider rounded-md 
                           text-primary focus:outline-none focus:ring-1 
                           focus:ring-action-primary transition duration-150"
                placeholder="Repite tu contraseña"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="role" className="block text-sm font-medium text-primary mb-2">
                Selecciona tu rol
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-divider rounded-md text-primary focus:outline-none focus:ring-1 focus:ring-action-primary transition duration-150"
              >
                <option value="customer">Customer</option>
                <option value="renter">Renter</option>
              </select>
            </div>

            {/* Botón Principal (CTA) */}
            <button
  type="submit"
  className="w-full bg-blue-600 text-white font-medium py-3 rounded-md transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md text-base"
>
  Crear Cuenta
</button>

          </form>

          {/* Enlace a Login */}
          <div className="mt-6 text-center text-sm">
            <p className="text-secondary">
              ¿Ya tienes una cuenta?{' '}
              <a 
                href="/login" 
                className="text-action-primary font-medium hover:underline"
              >
                Inicia Sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;