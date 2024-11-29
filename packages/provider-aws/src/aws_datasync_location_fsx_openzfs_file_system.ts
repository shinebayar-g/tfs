import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgsprotocolnfsMountOptions {
  version?: string;
}
export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgsprotocolnfs {
  mount_options: AwsDatasyncLocationFsxOpenzfsFileSystemArgsprotocolnfsMountOptions;
}
export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgsprotocol {
  nfs: AwsDatasyncLocationFsxOpenzfsFileSystemArgsprotocolnfs;
}
export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgs {
  fsx_filesystem_arn: string;
  security_group_arns: string[];
  tags?: {
    [key: string]: string;
  };
  protocol: AwsDatasyncLocationFsxOpenzfsFileSystemArgsprotocol;
}
export class aws_datasync_location_fsx_openzfs_file_system extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxOpenzfsFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_fsx_openzfs_file_system");
  }
}