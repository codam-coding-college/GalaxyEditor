/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   SearchBox.tsx                                      :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/26 11:20:05 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./SearchBox.scss";
import React from "react";

export interface Properties {
    id: string
    data: Function;
}

/**
 * Component that allows for searching of values with a datalist.
 */
const SearchBox: React.FC<Properties> = ({id, data})=> {

    return (
        <>
			<datalist id={id}>
                {data.call(null)}
			</datalist> 

            <input
                className="search-box"
                list={id}
                placeholder="Search"
				autoCorrect="false"
				spellCheck="false"
            />
        </>
    );
};

export default SearchBox;
