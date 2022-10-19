import React, { useState } from 'react'

interface AutoHeightImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loadingComponent?: React.ReactNode,
  defaultHeight?: string,
}

export function AutoHeightImage( { loadingComponent, defaultHeight, style, ...rest }: AutoHeightImageProps ) {
  const [loaded, setLoaded] = useState(false);

  function onLoad() {
    setLoaded(true);
  }

  function renderLoading() {
      if (loaded) return
      return loadingComponent || (<div style={{ height: defaultHeight ?? "200px" }}></div>)
  }

  return (
    <>
      {renderLoading()}
      <img {...rest}
        style={!loaded ? {...style, display: 'none'} : style}
        onLoad={onLoad}
      />
    </>
  );
}
