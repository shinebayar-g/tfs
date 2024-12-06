import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkInterfaceSgAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsNetworkInterfaceSgAttachmentArgs {
  network_interface_id: string;
  security_group_id: string;
  timeouts?: AwsNetworkInterfaceSgAttachmentArgsTimeouts;
}

export class aws_network_interface_sg_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkInterfaceSgAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_network_interface_sg_attachment");
  }
}
