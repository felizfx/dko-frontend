/* eslint-disable no-undef */
import chalk from "chalk";
import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

const publicPath = path.join(__dirname, "/public");

app.use(express.static(publicPath));

app.listen(PORT, () => {
	console.log(chalk.blue(`[server] server listening on port ${PORT}`));
});