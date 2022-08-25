/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 14:36:56 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.scss";
import Canvas from "./Containers/Canvas/Canvas";
import Toolbar from "./Containers/Toolbar/Toolbar";
import { NameIDCollection, Project } from "./Utilities/Types";
import { createContext, useContext, useState } from "react";

////////////////////////////////////////////////////////////////////////////////
// APP Context

/**
 * App global context interface, used to transport data between toolbar and canvas back and forward.
 */
export interface AppContextType {
	/** Array of all the projects of the given cursus. */
	projects: Project[];
	updateProjects: React.Dispatch<React.SetStateAction<Project[]>>;

	/** The currently focused project. */
	focusProject: NameIDCollection;
	updateFocusProject: React.Dispatch<React.SetStateAction<NameIDCollection>>;

	/** Currently selected cursus. */
	currentCursus: NameIDCollection;
	updateCurrentCursus: React.Dispatch<React.SetStateAction<NameIDCollection>>;

	/** Currently selected Campus */
	currentCampus: NameIDCollection;
	updateCurrentCampus: React.Dispatch<React.SetStateAction<NameIDCollection>>;

	// TODO: Add user OAuth stuff here so we can access the token.
}

const AppContext = createContext<AppContextType>(null!);

/**
 * TODO: Set initial state to what was fetched from intra or is in cache.
 *
 * Data that is shared amongst the app.
 * @param param0 The children in scope of this data.
 * @returns The App context provider.
 */
const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
	const [projects, setProjects] = useState<Project[]>(null!);
	const [cursus, setCursus] = useState<NameIDCollection>(null!);
	const [campus, setCampus] = useState<NameIDCollection>(null!);
	const [focusProject, setFocusProject] = useState<NameIDCollection>(null!);

	// Construct the object
	const value: AppContextType = {
		focusProject: focusProject,
		updateFocusProject: setFocusProject,

		projects: projects,
		updateProjects: setProjects,

		currentCursus: cursus,
		updateCurrentCursus: setCursus,

		currentCampus: campus,
		updateCurrentCampus: setCampus,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/** Alias the simplify the access to the context. */
export const useAppData = () => {
	return useContext(AppContext);
};

////////////////////////////////////////////////////////////////////////////////

function App() {
	// Credits
	console.log(
		"%cWritten by W2.Wizard 👨🏼‍💻🤙 (lde-la-h)",
		"background-color: #12141a; font-size: 12px; border-radius: 6px; padding: 6px; margin: 6px"
	);

	//const fuck = useAppData();
	//fuck.campuses.update((prevState) => {
	//	// DO STUFF
	//	return prevState;
	//})

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
