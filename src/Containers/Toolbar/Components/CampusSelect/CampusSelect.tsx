/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   CampusSelect.tsx                                   :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 22:43:31 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./CampusSelect.scss";
import React, { useEffect, useState } from "react";
import { NameIDCollection } from "../../../../Utilities/Types";
import { AppContextType, useAppData } from "../../../../App";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
	callback: (data: NameIDCollection) => void;
}

////////////////////////////////////////////////////////////////////////////////

const fetchCampuses = (appData: AppContextType) => {
	// TODO: Fetch this from the API or cache.

	console.log("Updating user campuses");
	return (
		<>
			<option value={1}>{"Amsterdam"}</option>
			<option value={21}>{"Morocco"}</option>
			<option value={19}>{"Tokyo"}</option>
		</>
	);
};

/**
 * Element with possible values for selection.
 */
const CampusSelect: React.FC<Properties> = ({ callback }) => {
	const appData = useAppData();
	const [options, setOptions] = useState<any>(null);

	// Update the cursi once from user data
	useEffect(() => {
		setOptions(fetchCampuses(appData));
	}, []);

	const handlecallback = (
		collection: HTMLCollectionOf<HTMLOptionElement>
	) => {
		for (let i = 0; i < collection.length; i++) {
			const element = collection[i];
			if (element.selected) {
				return callback({
					name: element.textContent!,
					id: Number.parseInt(element.value),
				});
			}
		}
	};

	return (
		<>
			<select
				className="campus-select"
				onChange={(e) => {
					handlecallback(e.currentTarget.selectedOptions);
				}}
			>
				{options}
			</select>
		</>
	);
};

export default CampusSelect;
