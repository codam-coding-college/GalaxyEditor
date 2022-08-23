/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/23 10:25:11 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.scss";
import Canvas from "./Containers/Canvas/Canvas"
import Toolbar from "./Containers/Toolbar/Toolbar"
import { NameIDCallbackFunction, Project } from "./Utilities/Types";
import { createContext, useContext, useState } from "react";

////////////////////////////////////////////////////////////////////////////////

/**
 * The toolbar context which lets you hook onto
 */
interface AppContextType {
	// Toolbar hooks
    onSearchChange: (callback: NameIDCallbackFunction) => void;
    onCursusChange: (callback: NameIDCallbackFunction) => void;
    onCampusChange: (callback: NameIDCallbackFunction) => void;

	// Data
	projects: Project[];
}

const AppContext = createContext<AppContextType>(null!);

////////////////////////////////////////////////////////////////////////////////

function App() {
    return (
        <>
			<header>
				<Toolbar />
			</header>
			<main>
				<Canvas />
			</main>
        </>
    );
}

export default App;
