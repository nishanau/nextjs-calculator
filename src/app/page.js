// src/app/page.js
import Calculator from '../components/calculator';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div>
        <h1 className="text-3xl mb-5 text-center">Calculator App</h1>
        <Calculator />
      </div>
    </div>
  );
}
