import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50 flex flex-col items-center justify-between p-4 sm:p-6 text-gray-800 font-sans">
      <header className="w-full max-w-md flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐻</span>
          <span className="font-bold text-sm tracking-tight text-gray-900">TunnelBear Auth Studio</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <a 
            href="https://arham.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            Arham Eskafi
          </a>
          <span>•</span>
          <a 
            href="https://youtube.com/@walkcooklive" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Walk Cook Live
          </a>
        </div>
      </header>

      <main className="w-full max-w-[420px] my-auto py-6">
        <LoginForm />
      </main>

      <footer className="w-full max-w-md text-center py-4 text-xs text-gray-500 border-t border-gray-200/60 mt-4">
        <p>
          Curated by{' '}
          <a 
            href="https://arham.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-gray-800 hover:underline"
          >
            Arham Eskafi
          </a>{' '}
          • Overland Tech Nomad on{' '}
          <a 
            href="https://youtube.com/@walkcooklive" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-red-600 hover:underline"
          >
            Walk Cook Live
          </a>
        </p>
        <p className="mt-1 text-gray-400">
          Interactive SVG/PNG Avatar Animation in React 19 + TypeScript + Tailwind
        </p>
      </footer>
    </div>
  );
}
