/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   SearchBox.tsx                                      :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/24 14:42:43 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./SearchBox.scss";
import React, { useState, useRef, createRef } from "react";
import { NameIDCollection } from "../../Utilities/Types";

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
const SearchBox: React.FC<Properties> = ({ id, data, callback }) => {
	// TODO: Later when the editor has the project creation feature, we need to expose this.
	// so that new entries can be added to the datalist.
	const datalistRef = createRef<HTMLDataListElement>()!;

	const handlecallback = (value: string) => {
		if (datalistRef.current == undefined) return;

		// Find the project in the list.
		let datalist = datalistRef.current;
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
				className="search-box"
				list={id}
				onInput={(e) => {
					handlecallback(e.currentTarget.value);
				}}
				placeholder="Search"
				autoCorrect="false"
				spellCheck="false"
			/>
		</>
	);
};

export default SearchBox;
