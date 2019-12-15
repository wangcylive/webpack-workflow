import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'
import store, { RootStore } from '@/store'

function useStores (): RootStore  {
  return useContext(MobXProviderContext)
}

export default useStores