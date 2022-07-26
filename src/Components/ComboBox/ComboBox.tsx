/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ComboBox.tsx                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/26 11:09:08 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./ComboBox.scss";
import React from "react";

export interface Properties {
    data: Function;
}

/**
 * Element with possible values for selection.
 */
const ComboBox: React.FC<Properties> = ({data}) => {

    return (
        <>
            <select className="combo-box">
                {data.call(null)}
            </select>
        </>
    );
};

export default ComboBox;
