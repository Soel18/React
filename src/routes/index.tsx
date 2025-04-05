import React from "react";
import { Route, Routes } from "react-router-dom";
import App from '../App';

const Pokedex = React.lazy(() => import("../views/Pokedex"));
const PokemonProfile = React.lazy(() => import("../views/PokemonPorfile"));
const PokemonByType = React.lazy(() => import("../views/PokemonType"));

const AppRoutes = () => (
    <Routes>
        <Route
        path="/" 
        element={
            <React.Suspense fallback={<div>loading...</div>}>
                <Pokedex />
            </React.Suspense>
        }
        />
          <Route
        path="/pokemon/:pokemonName" 
        element={
            <React.Suspense fallback={<div>loading...</div>}>
                <PokemonProfile />
            </React.Suspense>
        }
        />
        <Route
        path="/type/:typeName" 
        element={
            <React.Suspense fallback={<div>loading...</div>}>
                <PokemonByType />
            </React.Suspense>
        }
        />
    </Routes>
);

export default AppRoutes;