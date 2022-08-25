/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ProjectSearch.tsx                                  :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 16:34:44 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./ProjectSearch.scss";
import React, { createRef, useEffect, useState } from "react";
import { NameIDCollection } from "../../../../Utilities/Types";
import { AppContextType, useAppData } from "../../../../App";
import APIData from "../../../../Assets/APIData";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
	callback: (data: NameIDCollection) => void;
}

////////////////////////////////////////////////////////////////////////////////

const fetchProjects = (appData: AppContextType) => {
	// TODO: Fetch this from the API or cache.
	// TODO: Later when project creation capabilities are available. It should also add the newly created projects.

	console.log("Updating project selection");
	return Object.entries(APIData).map((entry, index) => {
		const key = entry[1].name;
		const value = entry[1].id;

		return <option key={index} label={value.toString()} value={key} />;
	});
};

/**
 * Component that allows for searching of values with a datalist.
 */
const ProjectSearch: React.FC<Properties> = ({ callback }) => {
	const datalistRef = createRef<HTMLDataListElement>()!;
	const appData = useAppData();
	const [projects, setProjects] = useState<any>(null);

	// Update the project list if campus or cursus change.
	useEffect(() => {
		setProjects(fetchProjects(appData));
	}, [appData.currentCampus, appData.currentCursus]);

	const callbackHandle = (value: string) => {
		if (datalistRef.current == undefined) return;

		// Find the project in the list.
		const datalist = datalistRef.current;
		for (let i = 0; i < datalist.options.length; i++) {
			if (datalist.options[i].value === value) {
				return callback({
					name: datalist.options[i].value,
					id: Number.parseInt(datalist.options[i].label),
				});
			}
		}
	};

	return (
		<>
			<datalist id={"project-search"} ref={datalistRef}>
				{projects}
			</datalist>

			<input
				className="project-search"
				list={"project-search"}
				onInput={(e) => {
					callbackHandle(e.currentTarget.value);
				}}
				placeholder="Search"
				autoCorrect="false"
				spellCheck="false"
			/>
		</>
	);
};

export default ProjectSearch;
