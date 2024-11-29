import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightFolderArgspermissions {
  actions: string[];
  principal: string;
}
export interface AwsQuicksightFolderArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsQuicksightFolderArgs {
  folder_id: string;
  folder_type?: string;
  name?: string;
  parent_folder_arn?: string;
  tags?: {
    [key: string]: string;
  };
  permissions: AwsQuicksightFolderArgspermissions;
  timeouts: AwsQuicksightFolderArgstimeouts;
}
export class aws_quicksight_folder extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly created_time!: string;
  readonly folder_path!: string[];
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightFolderArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_folder");
  }
}