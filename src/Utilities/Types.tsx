/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Types.tsx                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/08/22 09:24:34 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/08/22 13:58:05 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

export const Colors = {
	White:		"#ffffff",
	Red:		"#CC6256",
	Cyan:		"#00BABC", // #00A8C1
	Gray:		"#46484C",
	LightGray:	"#6F7278",
	Orange:		"#FFA300",
};

/**
 * A Point,
 */
export type Point = {
    x: number;
    y: number;
}

/**
 * A project.
 */
export type Project = {
    id: number;
    name: string;
    type: string;
    x: number;
    y: number;
    lines: [{origin: Point, target: Point}]
};

/**
 * Callback function that returns a name and a given id back.
 * For example: Requesting '42Cursus' which has ID 21.
 */
export interface NameIDCallbackFunction {
    (name: string, id: number): void;
}