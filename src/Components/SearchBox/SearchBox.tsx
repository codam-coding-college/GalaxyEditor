/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   SearchBox.tsx                                      :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 12:05:01 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./SearchBox.scss";
import React, { useState, useRef } from "react";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
    id: string
    data: Function;
    callback: Function;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Component that allows for searching of values with a datalist.
 */
const SearchBox: React.FC<Properties> = ({id, data, callback})=> {

	const [inputText, setInputText] = useState('');

	function handlecallback(value: string)  {
		setInputText(value);
		console.log(value);
	}

    return (
        <>
			<datalist id={id}>
                {data.call(null)}
			</datalist> 

            <input
                className="search-box"
                list={id}
				onChange={(e) => { handlecallback(e.target.value) }}
                placeholder="Search"
				autoCorrect="false"
				spellCheck="false"
            />
        </>
    );
};

export default SearchBox;
