/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/25 12:44:55 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Assets
import "./Toolbar.scss";
import FTLogo from "../../Assets/42_Logo";
import APIData from "../../Assets/APIData";

import Button from "../../Components/Button/Button";
import Search from "../../Components/SearchBox/SearchBox";
import ComboBox from "../../Components/ComboBox/ComboBox";
import Separator from "../../Components/Separator/Separator";
import React from "react";
import { useAppData } from "../../App";
import { NameIDCollection } from "../../Utilities/Types";

////////////////////////////////////////////////////////////////////////////////

/**
 * Fetch all the projects of the current cursus.
 * @returns JSX.Element[] - Array of options with all the projects and their ID's.
 */
const getCursusProjectsElements = () => {
	return Object.entries(APIData).map((entry, index) => {
		const key = entry[1].name;
		const value = entry[1].id;

		return <option key={index} label={value.toString()} value={key} />;
	});
};

/**
 * Fetch all current accessible cursi of the current user.
 * @returns JSX.Element[] - Array of options with all current registered cursi.
 */
const getRegisteredCursiElements = () => {
	// TODO: Fetch this from the API.
	return (
		<>
			<option value={21}>{"42Cursus"}</option>
			<option value={19}>{"Piscine C"}</option>
		</>
	);
};

/**
 * Fetch all current accessible campuses of the current user.
 * @returns JSX.Element[] - Array of options with all current registered campuses.
 */
const getRegisteredCampusesElements = () => {
	// TODO: Fetch this from the API.
	return (
		<>
			<option value={1}>{"Amsterdam"}</option>
			<option value={21}>{"Morocco"}</option>
			<option value={19}>{"Tokyo"}</option>
		</>
	);
};

////////////////////////////////////////////////////////////////////////////////

// NOTE: Campus->Cursus->Project
// Campus defines the cursi which in turn defines what projects are available.
// We need to make sure everything updates accordingly and is set correctly when
// we change the comboboxes

/**
 * Constructs the toolvar navigation bar.
 * @returns The toolbar.
 */
const Toolbar = () => {
	const appData = useAppData();

	return (
		<nav>
			<div id="editor-toolbar">
				{/* Toolbar stack */}
				<div className="stack">
					<FTLogo id="logo-toolbar" />

					{/* Project Search */}
					{/* TODO: Update when cursus or campus changes */}
					<Search
						id="cursi"
						data={getCursusProjectsElements}
						callback={(data: NameIDCollection) => {
							console.log("Searching for:", data);
							appData.updateFocusProject(data);
						}}
					/>

					{/* Campus */}
					{/* NOTE: Data only ever initalized on startup from user data*/}
					<ComboBox
						data={getRegisteredCampusesElements}
						callback={(data: NameIDCollection) => {
							console.log("Switching campus to:", data);
							appData.updateCurrentCampus(data);
							
							// TODO: Fetch default cursus from API instead!
							console.log("Fetching default cursus");
							appData.updateCurrentCursus(appData.currentCursus);
							appData.updateFocusProject(null!);
						}}
					/>

					{/* Cursus selection */}
					{/* TODO: Update when campus changes */}
					<ComboBox
						data={getRegisteredCursiElements}
						callback={(data: NameIDCollection) => {
							console.log("Switching cursus to:", data);
							appData.updateCurrentCursus(data);
							appData.updateFocusProject(null!);
						}}
					/>

					<Separator />

					{/* Options*/}
					<Button
						text={"Center view"}
						callback={() => {
							console.log("Hello!");
						}}
						icon={"fa-solid fa-crop-simple"}
					/>
					<Button
						text={"Reset"}
						callback={() => {
							console.log("Hello!");
						}}
						icon={"fa-solid fa-repeat"}
					/>
					<Button
						text={"Export"}
						callback={() => {
							console.log("Hello!");
						}}
						icon={"fa-solid fa-upload"}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Toolbar;
