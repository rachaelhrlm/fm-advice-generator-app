import React, { FunctionComponent, useEffect, useState } from 'react';

interface Slip {
    id: number;
    advice: string;
}

export const App: FunctionComponent = () => {
    const [slip, setSlip] = useState<Slip>();

    const getAdvice = async () => {
        const data: { slip: Slip } = await fetch(`advice`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).then((response) => response.json());

        if (data) setSlip(data.slip);
    };

    useEffect(() => {
        getAdvice();

        return () => {
            setSlip(undefined);
        };
    }, []);

    return (
        <main className="w-full h-screen bg-neutral-dark-blue p-3 flex flex-col place-content-center place-items-center">
            <section className="w-full bg-neutral-dark-gray-blue px-6 pt-6 pb-10 space-y-4 rounded-xl text-center relative md:w-[540px] md:px-[1.3rem]">
                <h1 className="text-[11px] text-primary-green uppercase tracking-[.2rem] md:text-[13px]">Advice #{slip?.id}</h1>
                <p className="text-[24px] md:text-base">{slip?.advice}</p>

                <div className="flex justify-center">
                    <img className="block md:hidden" src={`${process.env.PUBLIC_URL}/images/pattern-divider-mobile.svg`} alt="divider" />
                    <img className="hidden md:block" src={`${process.env.PUBLIC_URL}/images/pattern-divider-desktop.svg`} alt="divider" />

                    <button
                        className="absolute -bottom-5 rounded-full bg-primary-green h-10 w-10 flex place-content-center place-items-center cursor-pointer active:rotate-[360deg] hover:drop-shadow-glow transition-all duration-300"
                        onClick={() => getAdvice()}>
                        <img className="h-[.9rem] w-[.9rem]" src={`${process.env.PUBLIC_URL}/images/icon-dice.svg`} alt="dice" />
                    </button>
                </div>
            </section>
        </main>
    );
};
