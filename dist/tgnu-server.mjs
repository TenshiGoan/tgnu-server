#!/usr/bin/env node
import { program } from "commander";
import Consola from "consola";
import { buildAction } from "./build";
const logger = Consola.withScope("tgnu").withScope("server");
program.command("dev").action(buildAction);
program.command("build").action(buildAction);
program.parseAsync();
//# sourceMappingURL=tgnu-server.mjs.map