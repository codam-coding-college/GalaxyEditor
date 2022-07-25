/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   SearchBox.tsx                                      :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/25 18:05:05 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./SearchBox.scss";
import React from "react";

/**
 * A separator element that draws a vertical bar with a margin.
 */
const SearchBox = () => {
    return (
        <>
			<datalist id="project-datalist">
				<option value="" />
				<option value="libft" />
				<option value="pipex" />
			</datalist> 

            <input
                id="graph-search"
                list="project-datalist"
                placeholder="Search"
            />
        </>
    );
};

export default SearchBox;
