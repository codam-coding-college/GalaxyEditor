/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Button.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/26 10:51:17 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Button.scss";
import React from "react";

export interface Properties {
    text: string;
    callback: Function;
    icon: string;
}

/**
 * A button with a text value, a callback and possibly an icon.
 */
const Button: React.FC<Properties> = ({ text, callback, icon}) => {
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
