/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Types.tsx                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/08/22 09:24:34 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/08/25 09:42:28 by W2Wizard      ########   odam.nl         */
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
 * A Point.
 */
export type Point = {
    x: number;
    y: number;
}

/**
 * The type of project along with its radius.
 */
export type ProjectKind = {
	BigProject:		66, // Difficult project.
	Project:		50, // Normal project.
	Rush:			25, // Rush project.
	Exam:			25, // Exam project.
	Piscine:		50, // Piscine project.
};

/**
 * A project.
 */
export type Project = {
    id: number;
    name: string;
    kind: ProjectKind;
    x: number;
    y: number;
    lines: [{origin: Point, target: Point}]
};

/**
 * Type that combines a name / string with a given id / number.
 * For example: '42Cursus' which has ID 21.
 */
export type NameIDCollection = {
    name: string, 
	id: number
}
