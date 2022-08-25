/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ProjectSearch.tsx                                  :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 14:01:28 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./ProjectSearch.scss";
import React, { createRef, useEffect } from "react";
import { NameIDCollection } from "../../../../Utilities/Types";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
	id: string;
	data: Function;
	callback: (data: NameIDCollection) => void;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Component that allows for searching of values with a datalist.
 */
const ProjectSearch: React.FC<Properties> = ({ id, data, callback }) => {

	const datalistRef = createRef<HTMLDataListElement>()!;

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
			<datalist id={id} ref={datalistRef}>
				{data.call(null)}
			</datalist>

			<input
				className="project-search"
				list={id}
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
