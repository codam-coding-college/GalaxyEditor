/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/23 13:37:47 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.scss";
import Canvas from "./Containers/Canvas/Canvas"
import Toolbar from "./Containers/Toolbar/Toolbar"
import { NameIDCallbackFunction, Project } from "./Utilities/Types";
import { createContext, useContext, useState } from "react";

////////////////////////////////////////////////////////////////////////////////
// APP Context
interface AppContextType {
	projects: Project[];

	
}

const AppContext = createContext<AppContextType>(null!);

/**
 * Data that is shared amongst the app.
 * @param param0 The children in scope of this data.
 * @returns The App context provider.
 */
const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
	// TODO: Set initial state to what was fetched from intra or is in cache.
    const [projectData, setProjectData] = useState<Project[]>(null!);

	// Construct the object
    const value: AppContextType = { projects: projectData };

    return (<AppContext.Provider value={value}>{children}</AppContext.Provider>);
};

// Retrieves the current App data.
const GetAppData = () => {
	return useContext(AppContext);
};

////////////////////////////////////////////////////////////////////////////////

function App() {
    return (
        <>
			<AppDataProvider>
				<header>
					<Toolbar />
				</header>
				<main>
					<Canvas />
				</main>
			</AppDataProvider>
        </>
    );
}

export default App;
