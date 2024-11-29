import { TerraformConfig, TerraformResource } from "tfs";
export interface BooleanPolicy {
  enforced: boolean;
}
export interface Allow {
  all?: boolean;
  values?: string[];
}
export interface Deny {
  all?: boolean;
  values?: string[];
}
export interface ListPolicy {
  inherit_from_parent?: boolean;
  allow: Allow;
  deny: Deny;
}
export interface RestorePolicy {
  default: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleProjectOrganizationPolicyArgs {
  constraint: string;
  project: string;
  boolean_policy: BooleanPolicy;
  list_policy: ListPolicy;
  restore_policy: RestorePolicy;
  timeouts: Timeouts;
}
export class google_project_organization_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly update_time!: string;
  readonly version?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectOrganizationPolicyArgs) {
    super(config, "resource", args, resourceName, "google_project_organization_policy");
  }
}