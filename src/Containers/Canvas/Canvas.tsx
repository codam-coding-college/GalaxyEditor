/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Canvas.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/19 16:39:28 by lde-la-h      ########   odam.nl         */
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

		window.addEventListener("resize", () =>{
			canvas.setWidth(window.innerWidth - 16);
			canvas.setHeight(window.innerWidth - 16);
		});
	});

	//window.onload = function () {
	
	//	// Set Canvas size
	//	canvasEL.width = canvasScale * (window.innerWidth - 16);
	//	canvasEL.height = canvasScale * (window.innerHeight - headerHeight - 16);
	
	//	init();
	//	resetCanvas();
	//	draw();
	//}
	
	//window.addEventListener("resize", function () {
	
	//	// Recalculate the canvas size
	//	canvas.width = canvasScale * (window.innerWidth - 16);
	//	canvas.height = canvasScale * (window.innerHeight - headerHeight - 16);
	
	//	resetCanvas();
	//	draw();
	//});


	return (<canvas id="galaxy-graph" width={window.innerWidth - 16} height={window.innerWidth - 16} ref={canvasEl} />)
}

export default Canvas;
