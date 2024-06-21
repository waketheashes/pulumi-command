// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { CommandArgs } from "./command";
export type Command = import("./command").Command;
export const Command: typeof import("./command").Command = null as any;
utilities.lazyLoad(exports, ["Command"], () => require("./command"));

export { CopyFileArgs } from "./copyFile";
export type CopyFile = import("./copyFile").CopyFile;
export const CopyFile: typeof import("./copyFile").CopyFile = null as any;
utilities.lazyLoad(exports, ["CopyFile"], () => require("./copyFile"));

export { CopyToRemoteArgs } from "./copyToRemote";
export type CopyToRemote = import("./copyToRemote").CopyToRemote;
export const CopyToRemote: typeof import("./copyToRemote").CopyToRemote = null as any;
utilities.lazyLoad(exports, ["CopyToRemote"], () => require("./copyToRemote"));


// Export enums:
export * from "../types/enums/remote";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "command:remote:Command":
                return new Command(name, <any>undefined, { urn })
            case "command:remote:CopyFile":
                return new CopyFile(name, <any>undefined, { urn })
            case "command:remote:CopyToRemote":
                return new CopyToRemote(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("command", "remote", _module)
