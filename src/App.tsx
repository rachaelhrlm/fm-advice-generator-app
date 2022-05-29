import React, { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
    return (
        <main className="w-full h-screen bg-neutral-dark-blue p-3 flex flex-col place-content-center">
            <section className="w-full bg-neutral-dark-gray-blue px-6 pt-10 pb-[5rem] space-y-8 rounded-xl text-center relative">
                <h1 className="text-[11px] text-primary-green uppercase tracking-[.3rem]">Advice #117</h1>
                <p className="text-[24px]"> “It is easy to sit up and take notice, what's difficult is getting up and taking action.”</p>

                <div className="flex justify-center">
                    <img src={`${process.env.PUBLIC_URL}/images/pattern-divider-mobile.svg`} alt="divider" />

                    <div className="absolute -bottom-10 rounded-full bg-primary-green h-20 w-20 flex place-content-center place-items-center cursor-pointer active:rotate-[360deg] hover:drop-shadow-glow transition-all duration-300">
                        <img className="h-8 w-8" src={`${process.env.PUBLIC_URL}/images/icon-dice.svg`} alt="dice" />
                    </div>
                </div>
            </section>
        </main>
    );
};
