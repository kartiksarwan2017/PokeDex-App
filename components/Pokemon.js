import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({pokemon, index}) => {
    const pokeIndex = ('000' + (index + 1)).slice(-3)

    return (
        <div className="flex flex-wrap justify-center mx-auto">
        <Link href={`/pokemon/${pokemon.name}`}>
            <a>
                <div className="bg-blue-200 py-4 px-6 rounded-md">
                    <span className="font-semibold text-3xl mr-2">#{pokeIndex}</span>
                    <Image
                        alt={pokemon.name}
                        width={150}
                        height={150}
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                        className='h-[152px] w-[152px] sm:h-[200px] w-[200px]'
                    />
                    <span className="text-3xl">
            {pokemon.name}
            </span>
                </div>
            </a>
        </Link>
        </div>
    );
};

export default Pokemon;
