import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeInstanceAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeInstanceAttachmentArgs {
  environment: string;
  instance_id: string;
  timeouts?: GoogleApigeeInstanceAttachmentArgsTimeouts;
}

export class google_apigee_instance_attachment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeInstanceAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_instance_attachment");
  }
}
