/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   SearchBox.tsx                                      :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 13:21:41 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./SearchBox.scss";
import React, { useState, useRef, createRef } from "react";
import { NameIDCallbackFunction } from "../../Utilities/Types";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
    id: string
    data: Function;
    callback: NameIDCallbackFunction;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Component that allows for searching of values with a datalist.
 */
const SearchBox: React.FC<Properties> = ({id, data, callback}) => {

    // TODO: Later when the editor has the project creation feature, we need to expose this.
    // so that new entries can be added to the datalist.
    const datalistRef = createRef<HTMLDataListElement>()!;

	function handlecallback(value: string)  {
        if (datalistRef.current == undefined)
            return;

        // Find the project in the list.
        let datalist = datalistRef.current;
        for (let i = 0; i < datalist.options.length; i++)
        {
            if (datalist.options[i].value === value)
            {
                callback(datalist.options[i].value, Number.parseInt(datalist.options[i].label));
                return;
            }
        }
	}

    return (
        <>
			<datalist id={id} ref={datalistRef}>
                {data.call(null)}
			</datalist> 

            <input
                className="search-box"
                list={id}
				onInput={(e) => { handlecallback(e.currentTarget.value) }}
                placeholder="Search"
				autoCorrect="false"
				spellCheck="false"
            />
        </>
    );
};

export default SearchBox;
