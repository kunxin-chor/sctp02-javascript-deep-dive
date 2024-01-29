# Using the DOM to select by element name

## Select the first `h1`
```
document.querySelector("h1");
```
`querySelector` returns an object. The object is actually a DOM object (meaning we can use `querySelector` on it again). This DOM object allows us to manipulate its attributes, content, css styling etc. etc. etc.

## Select by id
```
document.querySelector("#why-choose-us");
```

## Select by class
```
document.querySelector(".shop");
```