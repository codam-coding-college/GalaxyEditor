/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 09:42:50 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.scss";
import Canvas from "./Containers/Canvas/Canvas";
import Toolbar from "./Containers/Toolbar/Toolbar";
import { NameIDCollection, Project } from "./Utilities/Types";
import { createContext, useContext, useState } from "react";

////////////////////////////////////////////////////////////////////////////////
// APP Context
interface AppContextType {
	// Project data that gets modified during runtime.
	projects: Project[];
	setProjects: React.Dispatch<React.SetStateAction<Project[]>>;

	// Current selected campus (Default: user)
	campus: NameIDCollection;
	setCampus: React.Dispatch<React.SetStateAction<NameIDCollection>>;

	// Current selected cursus (Default: user)
	cursus: NameIDCollection;
	setCursus: React.Dispatch<React.SetStateAction<NameIDCollection>>;

	focusProject: NameIDCollection;
	setfocusProject: React.Dispatch<React.SetStateAction<NameIDCollection>>;
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
	const [selectedCampus, setSelectedCampus] = useState<NameIDCollection>(null!);
	const [selectedCursus, setSelectedCursus] = useState<NameIDCollection>(null!);
	const [focusedProject, setfocusedProject] = useState<NameIDCollection>(null!);

	// Construct the object
	const value: AppContextType = {
		projects: projectData,
		setProjects: setProjectData,

		campus: selectedCampus,
		setCampus: setSelectedCampus,

		cursus: selectedCursus,
		setCursus: setSelectedCursus,

		focusProject: focusedProject,
		setfocusProject: setfocusedProject,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Alias the simply access to the context.
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
