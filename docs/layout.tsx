import { type ReactElement, useEffect, useState } from 'react'
import TopNavButton from './components/TopNavButton'
import { ThemeProvider } from '@0xsequence/design-system'
import BuilderAuthenticationButton from './components/BuilderAuthenticationButton'

import FullScreenLoading from './components/FullScreenLoading'

const Layout = ({ children }: { children: ReactElement | string }) => {
  const [restartedSearch, setRestartedSearch] = useState(false)
  useEffect(() => {
    if (localStorage) {
      localStorage.removeItem('filterText')
      setRestartedSearch(true)
    }
  }, [])

  if (!restartedSearch) return <FullScreenLoading />

  return (
    <div>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <TopNavButton />
        <BuilderAuthenticationButton />
      </div>
      {children}
    </div>
  )
}

export default Layout
