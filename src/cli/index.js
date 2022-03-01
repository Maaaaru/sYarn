import command from "commander"
import { version } from "../util/version"

command.version(version).parse(process.argv)