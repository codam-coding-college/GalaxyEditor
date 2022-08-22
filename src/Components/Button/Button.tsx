/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Button.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 11:35:33 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Button.scss";
import React from "react";

////////////////////////////////////////////////////////////////////////////////

export interface Properties {
    text: string;
    icon: string;
    callback: Function;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * A button with a text value, a callback and possibly an icon.
 */
const Button: React.FC<Properties> = ({ text, callback, icon }) => {
    const handleClick = () => {
        callback();
    };

    return (
        <button className="button" onClick={handleClick}>
            {icon.length > 0 && <i className={icon}></i>}
            {text}
        </button>
    );
};

export default Button;
