/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ComboBox.tsx                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/26 10:03:21 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./ComboBox.scss";
import React from 'react';

/**
 * A separator element that draws a vertical bar with a margin.
 */
const ComboBox = () => {
	return (
		<select id="graph-cursus" name="cursus">
			<option value="21">42cursus</option>
			<option value="9">C Piscine</option>
			<option value="22">Amsterdam</option>
			<option value="10">Paris</option>
		</select>
	)
}

export default ComboBox;