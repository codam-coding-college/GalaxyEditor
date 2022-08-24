/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   App.tsx                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:01:54 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/24 14:22:10 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./App.scss";
import Canvas from "./Containers/Canvas/Canvas";
import Toolbar from "./Containers/Toolbar/Toolbar";
import { Project } from "./Utilities/Types";
import { createContext, useContext, useState } from "react";

////////////////////////////////////////////////////////////////////////////////
// APP Context
interface AppContextType {
	projects: Project[];
	setProjects: React.Dispatch<React.SetStateAction<Project[]>>;

	campus: string;
	setCampus: React.Dispatch<React.SetStateAction<string>>;
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
	const [selectedCampus, setSelectedCampus] = useState<string>('');

	// Construct the object
	const value: AppContextType = {
		projects: projectData,
		setProjects: setProjectData,

		campus: selectedCampus,
		setCampus: setSelectedCampus

	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Retrieves the current App data.
export const useAppData = () => {
	return useContext(AppContext);
};

////////////////////////////////////////////////////////////////////////////////

function App() {
	// Credits
	console.log('%cWritten by W2.Wizard 👨🏼‍💻 (lde-la-h)', 'background-color: #12141a; font-size: 12px; border-radius: 6px; padding: 6px; margin: 6px');

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
