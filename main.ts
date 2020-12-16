import { Construct } from 'constructs';
import { App, TerraformStack, RemoteBackend, Token } from 'cdktf';
import { Vpc } from './.gen/providers/aws/vpc';
import { Subnet } from './.gen/providers/aws/subnet';
import { AwsProvider } from './.gen/providers/aws'


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    new AwsProvider(this, 'aws', {
      region: 'us-east-1'
    });

    const vpc = new Vpc(this, 'my-vpc', {
      cidrBlock: '10.0.0.0/16'
    });

    new Subnet(this, 'my-subnet', {
      vpcId: Token.asString(vpc.id),
      cidrBlock: '10.0.0.0/24'
    });

  }
}

const app = new App();
const stack = new MyStack(app, 'vpc-example');

new RemoteBackend(stack, {
  hostname: 'app.terraform.io',
  organization: 'prakash_demo_tfc_business',
  workspaces: {
    name: 'typescript'
  }
});

app.synth();
