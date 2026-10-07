import { FormEvent, useRef, useState } from 'react';
import { useBearImages } from '../hooks/useBearImages';
import { useBearAnimation } from '../hooks/useBearAnimation';
import BearAvatar from './BearAvatar';
import Input from './Input';

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { watchBearImages, hideBearImages } = useBearImages();
  const { currentBearImage, setCurrentFocus, currentFocus } = useBearAnimation({
    watchBearImages,
    hideBearImages,
    emailLength: values.email.length,
    isPeeking: showPassword,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      setError('Please provide both email and password.');
      return;
    }
    setError(null);
    setIsSuccess(true);
    setCurrentFocus('IDLE');
  };

  const handleReset = () => {
    setValues({ email: '', password: '' });
    setIsSuccess(false);
    setError(null);
    setShowPassword(false);
  };

  if (isSuccess) {
    return (
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center animate-fade-in">
        <div className="w-[140px] h-[140px] relative mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            {currentBearImage && (
              <BearAvatar currentImage={currentBearImage} />
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back! 🐻🎉</h2>
        <p className="text-gray-600 text-sm mb-6">
          Logged in securely as <span className="font-semibold text-gray-800">{values.email}</span>
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="py-3 px-6 rounded-xl bg-tunnel-bear text-gray-900 font-semibold text-sm hover:brightness-95 transition-all shadow-sm"
        >
          Sign Out / Test Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <div className="flex flex-col items-center mb-6">
        <div className="w-[140px] h-[140px] relative mb-2">
          <div className="absolute inset-0 flex items-center justify-center">
            {currentBearImage && (
              <BearAvatar 
                currentImage={currentBearImage} 
                key={`${currentFocus}-${values.email.length}-${showPassword}`}
              />
            )}
          </div>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900">Log In to TunnelBear</h1>
        <p className="text-xs text-gray-500 mt-1">Private browsing made simple & delightful</p>
      </div>

      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 text-red-700 text-xs px-3 py-2 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="email-input">
            Email Address
          </label>
          <Input
            id="email-input"
            placeholder="you@domain.com"
            ref={emailRef}
            autoFocus
            onFocus={() => setCurrentFocus('EMAIL')}
            onBlur={() => setCurrentFocus('IDLE')}
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-semibold text-gray-700" htmlFor="password-input">
              Password
            </label>
            <button
              type="button"
              className="text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈 Hide' : '👁️ Show (Peek)'}
            </button>
          </div>
          <div className="relative">
            <Input
              id="password-input"
              placeholder="••••••••••••"
              type={showPassword ? 'text' : 'password'}
              ref={passwordRef}
              onFocus={() => setCurrentFocus('PASSWORD')}
              onBlur={() => setCurrentFocus('IDLE')}
              autoComplete="current-password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded text-tunnel-bear focus:ring-tunnel-bear"
            />
            <span>Remember me</span>
          </label>
          <a href="#forgot" className="text-gray-500 hover:text-gray-800 underline">
            Forgot password?
          </a>
        </div>

        <button 
          type="submit"
          className="mt-2 py-3.5 w-full rounded-xl bg-tunnel-bear text-gray-900 font-bold text-base hover:brightness-95 active:scale-[0.99] transition-all shadow-md focus:outline-tunnel-bear outline-offset-2"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
