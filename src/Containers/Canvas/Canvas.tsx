/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Canvas.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 11:06:44 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Assets
import "./Canvas.scss";
import APIData from '../../Assets/APIData'

import { fabric } from 'fabric'
import { Colors } from "../../Utilities/Types";
import React, { useEffect, useRef, useCallback, useState } from 'react'
import makeLine from "../../Utilities/FabricUtils";

export const UserContext = React.createContext(null);

const Canvas = () => {
	const canvasEl = useRef(null)

	useEffect(() => {
		const canvas = new fabric.Canvas(canvasEl.current, { selection: false });
	
		// TODO: Add Custom context menu for creating lines, projects, ...
		// TODO: Remove hardcoded 72 value:
		// 64 from header height + 8 for margin + 16 for actual margin
		// Get header element height, including it with margins!

		// Setup events
		window.addEventListener("resize", () =>{
			canvas.setWidth(window.innerWidth - 16);
			canvas.setHeight(window.innerHeight - 72 - 16);
		});

		// Init
		canvas.setWidth(window.innerWidth - 16);
		canvas.setHeight(window.innerHeight - 72 - 16);



		let panning = false;
		canvas.on('mouse:up', function (e) {
			panning = false;
		});

		canvas.on('mouse:down', function (e) {
			panning = true;
		});

		canvas.on('mouse:move', function (e) {
			if (panning && e && e.e) {
				canvas.relativePan(new fabric.Point(e.e.movementX, e.e.movementY));
				canvas.selection = false;
				return;
			}
			canvas.selection = true;
		});
	});

	return (<canvas id="galaxy-graph" ref={canvasEl} />)
}

export default Canvas;
