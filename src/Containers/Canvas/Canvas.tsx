/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Canvas.tsx                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/19 15:15:07 by lde-la-h      ########   odam.nl         */
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

		console.log("Update!")

		fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
		fabric.Text.prototype.originX = 'center';
		fabric.Object.prototype.transparentCorners = false;

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

		// fabric.Text.prototype.originX = 'center';
		// fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
		// fabric.Object.prototype.transparentCorners = false;

		// TODO: Cleanup
		APIData.forEach(function (element) {

			let project = new fabric.Circle({
				radius: 65,
				stroke: Colors.LightGray,
				fill: Colors.Gray,
				strokeWidth: 3,
				hasControls: false
			});
			let text = new fabric.Text(element.name, { fontSize: 20, fontFamily: 'Roboto', selectable: false, strokeWidth: 0 });
			let group = new fabric.Group([project, text], { left: element.x, top: element.y });

			for (let i = 0; i < element.by.length; i++) {
				const points = element.by[i].points;

				const x1 = points[0][0];
				const y1 = points[0][1];
				const x2 = points[1][0];
				const y2 = points[1][1];

				let line = new fabric.Line([x1, y1, x2, y2], {
					stroke: Colors.LightGray,
					strokeWidth: 10,
					strokeLineCap: "round"
				});
				canvas.add(line)
			}
			canvas.add(group).calcOffset();
		});

		/*
		(function(){
			var rect = new fabric.Rect({ width: 200, height: 50, fill: '#faa', rx: 10, ry: 10, strokeWidth:0 });
			var text = new fabric.Text('Do stuff with me!', { fontSize: 20, fontFamily: 'Georgia', strokeWidth:0 });
			var group = new fabric.Group([ rect, text ], { left: 0, top: 0 });
			canvas.add(group).calcOffset();
		*/

	}, []);

	return (<canvas id="galaxy-graph" width="1450" height="1200" ref={canvasEl} />)
}

export default Canvas;
