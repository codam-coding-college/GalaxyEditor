/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   CursusSelect.tsx                                   :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 15:34:40 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./CursusSelect.scss";
import React, { useEffect, useState } from "react";
import { NameIDCollection } from "../../../../Utilities/Types";
import { AppContextType, useAppData } from "../../../../App";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
	callback: (data: NameIDCollection) => void;
}

////////////////////////////////////////////////////////////////////////////////

const fetchCursi = (appData: AppContextType) => {
	// TODO: Fetch this from the API or cache.

	console.log("Updating cursus selection");
	return (
		<>
			<option value={1}>{"42"}</option>
			<option value={21}>{"42Cursus"}</option>
			<option value={69}>{"42.Zip"}</option>
			<option value={19}>{"Piscine C"}</option>
		</>
	);
};

/**
 * Element with possible values for selection.
 */
const CursusSelect: React.FC<Properties> = ({ callback }) => {
	const appData = useAppData();
	const [options, setOptions] = useState<any>(null);

	// Update the cursi if the campuses changes.
	useEffect(() => {
		setOptions(fetchCursi(appData));
	}, [appData.currentCampus]);

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
				className="cursus-select"
				onChange={(e) => {
					handlecallback(e.currentTarget.selectedOptions);
				}}
			>
				{options}
			</select>
		</>
	);
};

export default CursusSelect;
