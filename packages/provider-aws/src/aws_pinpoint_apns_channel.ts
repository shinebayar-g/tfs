import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPinpointApnsChannelArgs {
  application_id: string;
  bundle_id?: string;
  certificate?: string;
  default_authentication_method?: string;
  enabled?: boolean;
  private_key?: string;
  team_id?: string;
  token_key?: string;
  token_key_id?: string;
}
export class aws_pinpoint_apns_channel extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointApnsChannelArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_apns_channel");
  }
}