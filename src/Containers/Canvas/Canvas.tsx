/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Canvas.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/19 17:37:59 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Canvas.scss";
import { fabric } from 'fabric'
import APIData from '../../Assets/APIData'
import React, { useEffect, useRef } from 'react'

const Colors = {
	White:		"#ffffff",
	Red:		"#CC6256",
	Cyan:		"#00BABC", // #00A8C1
	Gray:		"#46484C",
	LightGray:	"#6F7278",
	Orange:		"#FFA300",
};

const Canvas = () => {
	const canvasEl = useRef(null)

	useEffect(() => {
		const canvas = new fabric.Canvas(canvasEl.current);
		
		// TODO: Remove hardcoded 72 value:
		// 64 from header height + 8 for margin + 16 for actual margin

		// Setup events
		window.addEventListener("resize", () =>{
			canvas.setWidth(window.innerWidth - 16);
			canvas.setHeight(window.innerHeight - 72 - 16);
		});

		// Init
		canvas.setWidth(window.innerWidth - 16);
		canvas.setHeight(window.innerHeight - 72 - 16);
	});

	return (<canvas id="galaxy-graph" ref={canvasEl} />)
}

export default Canvas;
