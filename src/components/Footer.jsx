export default function Footer() {
  return (
    <footer className=" py-8 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. Built with <span className="text-emerald-500 font-medium">React</span> & <span className="text-emerald-500 font-medium">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}