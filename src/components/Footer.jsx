function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-auto bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
