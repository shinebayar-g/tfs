import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WorkspaceProperties {
  compute_type_name?: string;
  root_volume_size_gib?: number;
  running_mode?: string;
  user_volume_size_gib?: number;
}
export interface AwsWorkspacesWorkspaceArgs {
  bundle_id: string;
  directory_id: string;
  root_volume_encryption_enabled?: boolean;
  tags?: {
    [key: string]: string;
  };
  user_name: string;
  user_volume_encryption_enabled?: boolean;
  volume_encryption_key?: string;
  timeouts: Timeouts;
  workspace_properties: WorkspaceProperties;
}
export class aws_workspaces_workspace extends TerraformResource {
  readonly computer_name!: string;
  readonly id?: string;
  readonly ip_address!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWorkspacesWorkspaceArgs) {
    super(config, "resource", args, resourceName, "aws_workspaces_workspace");
  }
}