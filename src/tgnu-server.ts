#!/usr/bin/env node
import { program } from "commander";
import Consola from "consola";

import { buildAction } from "./build";

const logger = Consola.withScope("tgnu").withScope("server");

program // DEV COMMAND
  .command("dev")
  .action(buildAction);

program // DEV COMMAND
  .command("build")
  .action(buildAction);

program.parseAsync();
