import React, { ReactNode } from 'react';

interface NoteBannerProps {
    text?: string,
    isFullWidth?: boolean
    children?: ReactNode
}

export function NoteBanner( props: NoteBannerProps ) {
    const { children, isFullWidth, text } = props;

    let outerContainerClass = "text-center py-4 opacity-80 lg:px-4";
    let innerContainerClass = "p-2 bg-gray-100 dark:bg-black dark:border dark:border-1 dark:border-white items-center leading-none lg:rounded-full flex lg:inline-flex";

    if ( !!isFullWidth ) {
      outerContainerClass += " w-full";
      innerContainerClass += " w-full";
    }

    return (
        <div className={outerContainerClass}>
        <div className={innerContainerClass} role="alert">
          <span className="flex rounded-full uppercase px-2 py-1 text-md font-bold dark:text-white">ℹ️</span>
          <span className="font-semçibold mr-2 text-left flex-auto dark:text-white">{ !!text ? text : children }</span>
          
          <svg 
            className="fill-current opacity-75 h-4 w-4 dark:text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20">
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
          </svg>
        </div>
        </div>
      )
}