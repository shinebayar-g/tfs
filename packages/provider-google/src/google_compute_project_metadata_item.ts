import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeProjectMetadataItemArgs {
  key: string;
  value: string;
  timeouts: Timeouts;
}
export class google_compute_project_metadata_item extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeProjectMetadataItemArgs) {
    super(config, "resource", args, resourceName, "google_compute_project_metadata_item");
  }
}