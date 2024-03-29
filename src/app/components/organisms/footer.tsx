import React from 'react';
import TextFooter from '../atoms/TextFooter/text-footer';

export default function Discover() {
    return (
        <div className="w-full bg-footer py-2 lg:py-3 px-6">
            <div className="space-y-2 flex flex-col justify-center items-center ">
                <TextFooter>*Las imágenes son referenciales.</TextFooter>
                <TextFooter>*El proyecto está sujeto a modificaciones por parte del desarrollador.</TextFooter>
                <div className='inline-flex'>
                    <TextFooter>© Glamping SMA.</TextFooter>
                    <TextFooter classes="w-7">|</TextFooter>
                    <a href="https://acesoftware.com.mx" className="underline text-almost-white" target="_blank">
                        <TextFooter classes="hover:underline">Desarrollado por Ace Software.</TextFooter>
                    </a>
                </div>
            </div>
        </div>
    );
}