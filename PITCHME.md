---
@title[Introduction]

@snap[center text-bold]
React Hooks<br>*The Future of Stateful React*
@snapend

---
@title[What are Hooks?]

@css[text-15 text-bold](What are React Hooks?)

@css[text-09 fragment](Use State & Lifecycle *without* Verbose Class Components)

---
@title[Example - useState]

@code[javascript code-blend](pitchme/useState.jsx)

@[2](Maaaaaagic)

---?color=rgb(40, 44, 52)
@title[Side by Side]

@snap[west span-50]
@code[jsx zoom-05 code-noscroll](pitchme/useState--Before.jsx)
@snapend

@snap[east span-50]
@code[jsx zoom-05](pitchme/useState.jsx)
@snapend

---?color=rgb(40, 44, 52)
@title[More Than State]

@snap[north h2-white]

## More Than State

@snapend

```jsx
const [state, setState] = useState({ foo: 'bar' });

useEffect(() => {
  const thingifiedNode = doThingWith(ref);
  return () => {
    // Clean up the subscription
    thingifiedNode.destroy();
  };
}, [ref]);

const value = useContext(MyContext);
```

@[1]

@[3-9]

@[11]

---
@title[Practical Example]

@code[jsx code-blend zoom-06](pitchme/useEffect.jsx)

@[3-13] (Do some work on Mount)

@[14-16] (Tear it down on Unmount)

@[17] (This is important)

---
@title[useEffect Memoization]

### Hook Memoization

```jsx
useEffect(() => /*...*/, []);
```

@[1] (Run on Mount/Unmount)

vs

```jsx
useEffect(() => /*...*/, [someProp]);
```

@[2] (Run on `someProp` Update/Clean Before Next Run)

+++
@title[Other Hook Memoization]

### Other Memoizable Hooks

```jsx
const click = useCallback(() => /*...*/, [onClick]);
const expensiveValue = useMemo(() => /*...*/, [a, b]);
```

@[1] (Only create a callback on when prop changes)
@[1] (Otherwise callback recreated for every re-render)

@[2] (Self explanitory, memoize function based on inputs)

---
@title[Composable]

## Hooks are composable!

Remember that `resource` function?

@code[jsx fragment](pitchme/composable.jsx)

@css[fragment text-08](Hooks can be used inside other functions<br>as long as the root function is render)

---
@title[Big Posibilities]

## Global State? Sure

@code[jsx fragment zoom-07](pitchme/api.jsx)
@code[jsx fragment zoom-07](pitchme/view.jsx)

+++
@title[All Together Now]

### All Together Now

@code[jsx zoom-07 code-power](pitchme/multiContext.jsx)

---
@title[Catch]

![Catch](https://www.scienceabc.com/wp-content/uploads/2016/09/whats-the-catch-meme.jpg)

---
@title[Cons]

## Cons

@ul

- Can't be used in conditionals

- Legacy/Function Split

- Easy to over/compute re-render

@ulend

---
@title[The Future]

## The Future

@css[text-08](React ecosystem already rapidly moving towards hooks)
@css[text-07](Core React team super optimistic about them too)
@ul

- Cleaner, Less Verbose

- Much less intrusive alternative to HoC

- Easily Composable

- Makes avoiding complex state libraries easier

@ulend

---
@title[Q/A]

# Questions?

---
@title[Resource]

### Resources

- [Official Guide](https://reactjs.org/docs/hooks-intro.html)

- [Dan Abramov's Blogg](https://overreacted.io/)

- [Rooks (hooks compilation)](https://react-hooks.org/)