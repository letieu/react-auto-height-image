# react-auto-height-image
Avoid zero height when loading image

[![demo](https://github.com/letieu/react-auto-height-image/blob/master/ezgif.com-gif-maker.gif "demo")](https://github.com/letieu/react-auto-height-image/blob/master/ezgif.com-gif-maker.gif "demo")

**Example**: use my package on the **left** side

## Install
```bash
yarn add react-auto-height-image
#or
npm install react-auto-height-image
```

## Use

Use with your loading component
```jsx
<AutoHeightImage
  src="https://i.picsum.photos/id/172/200/300.jpg"
  loadingComponent={<LoadingComponent />}
/>
```

Use with fixed height
```jsx
<AutoHeightImage
  src="https://i.picsum.photos/id/172/200/300.jpg"
  defaultHeight="200px"
/>
```

## Props
```js

interface AutoHeightImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loadingComponent?: React.ReactNode,
  defaultHeight?: string,
}

```
