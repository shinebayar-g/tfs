import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimeVoiceConnectorGroupArgsconnector {
  priority: number;
  voice_connector_id: string;
}
export interface AwsChimeVoiceConnectorGroupArgs {
  name: string;
  connector: AwsChimeVoiceConnectorGroupArgsconnector;
}
export class aws_chime_voice_connector_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorGroupArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_group");
  }
}