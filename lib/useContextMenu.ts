export function useContextMenu(menu: string[]) {
  return {
    setMenu: () => {
      console.log("use")
    },
    log: () => {
      console.log("hello")
    }
  }
}
