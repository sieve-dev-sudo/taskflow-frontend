import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
