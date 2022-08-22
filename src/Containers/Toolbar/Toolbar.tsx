/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Toolbar.tsx                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/25 11:38:25 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/08/22 14:08:31 by lde-la-h      ########   odam.nl         */
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

////////////////////////////////////////////////////////////////////////////////

/**
 * Fetch all the projects of the current cursus.
 * @returns JSX.Element[] - Array of options with all the projects and their ID's.
 */
const getCursusProjectsElements = () => {
    return Object.entries(APIData).map((entry, index) => {
        const key = entry[1].name;
        const value = entry[1].id;
        
        return (<option key={index} label={value.toString()} value={key} />);
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
    )
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

/**
 * Constructs the toolvar navigation bar.
 * @returns The toolbar.
 */
const Toolbar = () => {
    return (
        <nav>
            <div id="editor-toolbar">
                {/* Toolbar stack */}
                <div className="stack">
                    <FTLogo id="logo-toolbar" />

                    {/* Project Search */}
                    <Search
                        id="cursi"
                        data={getCursusProjectsElements}
                        callback={(name: string, id: number) => {
                            console.log("Selected project:", name, "with id", id);
                        }}
                    />

                    {/* Cursus selection */}
                    <ComboBox
                        data={getRegisteredCursiElements}
                        callback={(name: string, id: number) => {
                            console.log("Selected cursus:", name, "with id", id);
                        }}
                    />

                    {/* Campus */}
                    <ComboBox
                        data={getRegisteredCampusesElements}
                        callback={(name: string, id: number) => {
                            console.log("Selected campus:", name, "with id", id);
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
