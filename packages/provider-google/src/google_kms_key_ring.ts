import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsKeyRingArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleKmsKeyRingArgs {
  location: string;
  name: string;
  timeouts?: GoogleKmsKeyRingArgsTimeouts;
}

export class google_kms_key_ring extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingArgs) {
    super(config, "resource", args, resourceName, "google_kms_key_ring");
  }
}
