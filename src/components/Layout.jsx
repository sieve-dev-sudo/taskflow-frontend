import Header from './Header'
import Footer from './Footer'
import ToastContainer from './ToastContainer'

function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-indigo-100/80 to-transparent dark:from-indigo-950/40"
      />
      <Header />
      <main className="relative mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Layout
