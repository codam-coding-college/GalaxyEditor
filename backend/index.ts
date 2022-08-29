/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   index.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/08/29 11:02:55 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/08/29 12:20:26 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import path from "path";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/api", (req, res) => {
	res.json({test: "false"});
});

app.get("*", (req, res) => res.send("Nothing to see here :)"));

// Start
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
