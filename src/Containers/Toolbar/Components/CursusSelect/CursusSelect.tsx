/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   CursusSelect.tsx                                   :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 14:01:43 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./CursusSelect.scss";
import React from "react";
import { NameIDCollection } from "../../../../Utilities/Types";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
	data: Function;
	callback: (data: NameIDCollection) => void;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Element with possible values for selection.
 */
const CursusSelect: React.FC<Properties> = ({ data, callback }) => {
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
				{data.call(null)}
			</select>
		</>
	);
};

export default CursusSelect;
