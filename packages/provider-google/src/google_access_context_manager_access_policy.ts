import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAccessContextManagerAccessPolicyArgs {
  parent: string;
  scopes?: string[];
  title: string;
  timeouts?: GoogleAccessContextManagerAccessPolicyArgsTimeouts;
}

export class google_access_context_manager_access_policy extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_policy");
  }
}
