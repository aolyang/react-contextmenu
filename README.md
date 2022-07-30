# Another react contextmenu component

As [react-contextmenu](https://github.com/vkbansal/react-contextmenu) is no
longer maintained. I want to create my own context menu components.
This library will learn from the code logic from it.

# all WIPING

## Examples [ goal ]

## use inside a component

### with data set and anchor element

+ **anchor** for calculate position

```tsx
import { Menu } from "@anti-lib/rc-menu"

function FnComp() {
  const [data, setData] = useState<YourData[]>()
  const { anchor, setAnchor } = useInsideMenus()
  return <div>
    <Menu anchor={anchor} items={data} onClose={() => setAnchor(null)}>
      {
        (dataItem: MenuItem) => (
          <YourMenuItem>{dataItem.label}</YourMenuItem>
        )
      }
    </Menu>
    <button onClick={(e) => setAnchor(e.currentTarget)}>click me</button>
  </div>
}
```

## with children and anchor element

```tsx
import { Menu } from "@anti-lib/rc-menu"

type MenuItem = {
  key: string
  label: string
}

function FnComp() {
  const [data, setData] = useState<MenuItem[]>()
  const { anchor, setAnchor } = useInsideMenus()
  return <div>
    <Menu anchor={anchor} onClose={() => setAnchor(null)}>
      {
        data.map((dataItem: MenuItem) => (
          <YourMenuItem key={dataItem.key}>{dataItem.label}</YourMenuItem>
        ))
      }
    </Menu>
    <button onClick={(e) => setAnchor(e.currentTarget)}>click me</button>
  </div>
}
```

## global api

use anywhere, anytime.

```tsx
import { menus } from "@anti-lib/rc-menu"

menus.show(data, {
  x, y
})
```
