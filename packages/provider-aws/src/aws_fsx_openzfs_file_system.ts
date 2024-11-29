import { TerraformConfig, TerraformResource } from "tfs";
export interface DiskIopsConfiguration {
  mode?: string;
}
export interface ClientConfigurations {
  clients: string;
  options: string[];
}
export interface NfsExports {
  client_configurations: ClientConfigurations;
}
export interface UserAndGroupQuotas {
  id: number;
  storage_capacity_quota_gib: number;
  type: string;
}
export interface RootVolumeConfiguration {
  copy_tags_to_snapshots?: boolean;
  data_compression_type?: string;
  record_size_kib?: number;
  nfs_exports: NfsExports;
  user_and_group_quotas: UserAndGroupQuotas;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxOpenzfsFileSystemArgs {
  automatic_backup_retention_days?: number;
  backup_id?: string;
  copy_tags_to_backups?: boolean;
  copy_tags_to_volumes?: boolean;
  delete_options?: string[];
  deployment_type: string;
  final_backup_tags?: {
    [key: string]: string;
  };
  preferred_subnet_id?: string;
  security_group_ids?: string[];
  skip_final_backup?: boolean;
  storage_capacity?: number;
  storage_type?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  throughput_capacity: number;
  disk_iops_configuration: DiskIopsConfiguration;
  root_volume_configuration: RootVolumeConfiguration;
  timeouts: Timeouts;
}
export class aws_fsx_openzfs_file_system extends TerraformResource {
  readonly arn!: string;
  readonly daily_automatic_backup_start_time?: string;
  readonly dns_name!: string;
  readonly endpoint_ip_address!: string;
  readonly endpoint_ip_address_range?: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly root_volume_id!: string;
  readonly route_table_ids?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  readonly weekly_maintenance_start_time?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOpenzfsFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_openzfs_file_system");
  }
}