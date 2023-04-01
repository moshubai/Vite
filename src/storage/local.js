export function createLocalStorage(options) {
    const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7
  
    function set(key, data) {
      const storageData = {
        data,
        expire: DEFAULT_CACHE_TIME,
      }
  
      const json =  JSON.stringify(storageData)
      window.localStorage.setItem(key, json)
    }
  
    function get(key) {
      const json = window.localStorage.getItem(key)
      if (json) {
        let storageData  = null
  
        try {
          storageData = JSON.parse(json)
        }
        catch {
          // Prevent failure
        }
  
        if (storageData) {
          const { data, expire } = storageData
          if (expire === null || expire >= Date.now())
            return data
        }
  
        remove(key)
        return null
      }
    }
  
    function remove() {
      window.localStorage.removeItem(key)
    }
  
    function clear() {
      window.localStorage.clear()
    }
  
    return {
      set,
      get,
      remove,
      clear,
    }
  }
  
  export const storage = createLocalStorage()
  