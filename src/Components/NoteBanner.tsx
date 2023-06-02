//@ts-ignore
import React from 'react';

interface NoteBannerProps {
    text: string
}

export function NoteBanner( props: NoteBannerProps ) {
    const { text } = props;

    return (
        <div className=" text-center py-4 lg:px-4">
        <div className="p-2 bg-gray-100 items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span className="flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3">Note:</span>
          <span className="font-semçibold mr-2 text-left flex-auto">{  text }</span>
          <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
        </div>
      )
}