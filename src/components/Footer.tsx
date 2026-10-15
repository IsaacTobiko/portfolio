export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border py-8 text-sm text-muted sm:mt-28">
      <div className="mx-auto flex max-w-300 flex-wrap justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} Isaac Tobiko. Nairobi, Kenya.</span>
        <a href="#home" className="transition hover:text-text">
          Back to top
        </a>
      </div>
    </footer>
  );
}
