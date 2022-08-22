/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ComboBox.tsx                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 11:35:39 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./ComboBox.scss";
import React from "react";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
    data: Function;
    callback: Function;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Element with possible values for selection.
 */
const ComboBox: React.FC<Properties> = ({data, callback}) => {

    const handleChange = () => {
        callback();
    };

    return (
        <>
            <select className="combo-box" onChange={handleChange}>
                {data.call(null)}
            </select>
        </>
    );
};

export default ComboBox;
