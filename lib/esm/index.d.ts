import React from 'react';
interface AutoHeightImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    loadingComponent?: React.ReactNode;
    defaultHeight?: string;
}
export declare function AutoHeightImage({ loadingComponent, defaultHeight, style, ...rest }: AutoHeightImageProps): JSX.Element;
export {};
