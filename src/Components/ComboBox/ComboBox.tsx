/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ComboBox.tsx                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 13:33:50 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./ComboBox.scss";
import React from "react";
import { NameIDCallbackFunction } from "../../Utilities/Types";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
    data: Function;
    callback: NameIDCallbackFunction;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Element with possible values for selection.
 */
const ComboBox: React.FC<Properties> = ({data, callback}) => {

    function handlecallback(collection: HTMLCollectionOf<HTMLOptionElement>) {
        for (let i = 0; i < collection.length; i++) {
            const element = collection[i];
            if (element.selected)
            {
                callback(element.textContent!, Number.parseInt(element.value));
                return;
            }
        }
    }

    return (
        <>
            <select className="combo-box" onChange={(e) => { handlecallback(e.currentTarget.selectedOptions)}}>
                {data.call(null)}
            </select>
        </>
    );
};

export default ComboBox;
