/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/26 11:20:43 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import "./Toolbar.css";

import React from 'react';
import FTLogo from "../../Assets/42_Logo"
import Button from "../../Components/Button/Button"
import Search from "../../Components/SearchBox/SearchBox"
import ComboBox from "../../Components/ComboBox/ComboBox"
import Separator from "../../Components/Separator/Separator"
import APIData from "../../Assets/APIData";

function print() {
	console.log("Hello!");
}

/**
 * Fetch all the projects of the current cursus.
 * @returns JSX.Element[] - Array of options with all the projects and their ID's.
 */
const getCursusProjectsElements = () => {
	return Object.entries(APIData).map((entry, _) => {
		const key = entry[1].name
		const value = entry[1].id
		return <option value={key}>ID: {value}</option>
	})
}

/**
 * Fetch all current accessible cursi of the current user.
 * @returns JSX.Element[] - Array of options with all current registered cursi.
 */
const getRegisteredCursiElements = () => {
	// TODO: Fetch this from the API.
	return <option value={1}>{"42Cursus"}</option>
}

/**
 * Fetch all current accessible campuses of the current user.
 * @returns JSX.Element[] - Array of options with all current registered campuses.
 */
const getRegisteredCampusesElements = () => {
	// TODO: Fetch this from the API.
	return <option value={1}>{"Amsterdam"}</option>
}

const Toolbar = () => {
	return (
		<header id="editor-toolbar">

			{/* Toolbar stack */}
			<div className="stack">

				<FTLogo id="logo-toolbar"/>

				{/* Project Search */}
				<Search id="cursi" data={getCursusProjectsElements}/>

				{/* Cursus selection */}
				<ComboBox data={getRegisteredCursiElements}/>

				{/* Campus */}
				<ComboBox data={getRegisteredCampusesElements}/>

				<Separator />

				{/* Options*/}
				<Button text={"Center view"} callback={print} icon={"fa-solid fa-crop-simple"}/>
				<Button text={"Reset"} callback={print} icon={"fa-solid fa-repeat"}/>
				<Button text={"Export"} callback={print} icon={"fa-solid fa-upload"}/>
				
			</div>

		</header>
	)
}

export default Toolbar;