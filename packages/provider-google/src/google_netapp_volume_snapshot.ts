import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappVolumeSnapshotArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  volume_name: string;
  timeouts: Timeouts;
}
export class google_netapp_volume_snapshot extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly used_bytes!: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappVolumeSnapshotArgs) {
    super(config, "resource", args, resourceName, "google_netapp_volume_snapshot");
  }
}