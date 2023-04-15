import React from 'react';
import Layout from "../../components/Layout";
import Image from "next/image";

const Pokemon = ({pokemon}) => {
    const pokeIndex = ('000' + (pokemon.id)).slice(-3)
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    console.log(pokemon)

    const renderTypes = () => (
        pokemon.types.map(type => (
            <li key={type.slot} className="text-white text-2xl font-medium mr-2 px-4 rounded"    
            >
            <span key={type}>
                {type.type.name}
                </span>    
            </li>
        ))

    )

    const renderStats = () => (        

        pokemon.stats.map((stat, index) => (       

            <div key={index} className="bg-slate-700 my-2 rounded p-2">
                <div className="bg-slate-900 rounded px-2 p-2" style={{width: `${stat.base_stat}%`}}>
                    {stat.stat.name}: {stat.base_stat}
                </div>
            </div>
        ))
    )

    return (
        <Layout title={pokeName}>
           <div  className='min-h-screen pt-8 flex flex-wrap sm:flex-nowrap justify-center mx-auto'>
            
             <p className='text-4xl font-semibold '>
                <span className="mr-4">#{pokeIndex}</span>
             </p>   
             <div className="flex-1">
                <Image
                    alt={pokemon.name}
                    width={400}
                    height={400}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                />
            </div>

            <div className="flex-1">
            <div className="bg-slate-900 rounded p-5">
                <ul className="flex gap-5">
                    {renderTypes()}
                </ul>

                <div>
                    {renderStats()}
                </div>
            </div>
            </div>
            </div> 
        </Layout>
    );
};

export default Pokemon;

export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json()

    return {
        props: {
            pokemon
        }
    }
}