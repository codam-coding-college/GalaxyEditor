/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Button.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/25 14:34:35 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Button.scss";
import React from "react";

export interface Properties {
    text: string;
    callback: Function;
}

/**
 * A button with a text value and a callback.
 */
const Button: React.FC<Properties> = ({ text, callback }) => {
	
    const handleClick = () => {
        callback();
    };

    return (
        <button className="button" onClick={handleClick}>
            {text}
        </button>
    );
}; 

export default Button;
