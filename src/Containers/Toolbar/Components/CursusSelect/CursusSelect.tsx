/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   CursusSelect.tsx                                   :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 21:31:59 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./CursusSelect.scss";
import React, { useEffect, useRef, useState } from "react";
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
			<option value={1}>{Math.random()}</option>
			<option value={21}>{Math.random()}</option>
			<option value={69}>{Math.random()}</option>
			<option value={19}>{Math.random()}</option>
		</>
	);
};

/**
 * Element with possible values for selection.
 */
const CursusSelect: React.FC<Properties> = ({ callback }) => {
	const appData = useAppData();
	const select = useRef<HTMLSelectElement>(null!);
	const [options, setOptions] = useState<any>(null);

	// Update the cursi if the campuses changes.
	useEffect(() => {
		
		// Reset to the first available option.
		select.current.selectedIndex = 0;

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
				ref={select}
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
