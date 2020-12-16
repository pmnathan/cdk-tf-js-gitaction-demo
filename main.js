"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdktf_1 = require("cdktf");
const vpc_1 = require("./.gen/providers/aws/vpc");
const subnet_1 = require("./.gen/providers/aws/subnet");
const aws_1 = require("./.gen/providers/aws");
class MyStack extends cdktf_1.TerraformStack {
    constructor(scope, name) {
        super(scope, name);
        // define resources here
        new aws_1.AwsProvider(this, 'aws', {
            region: 'us-east-1'
        });
        const vpc = new vpc_1.Vpc(this, 'my-vpc', {
            cidrBlock: '10.0.0.0/16'
        });
        new subnet_1.Subnet(this, 'my-subnet', {
            vpcId: cdktf_1.Token.asString(vpc.id),
            cidrBlock: '10.0.0.0/24'
        });
    }
}
const app = new cdktf_1.App();
const stack = new MyStack(app, 'vpc-example');
new cdktf_1.RemoteBackend(stack, {
    hostname: 'app.terraform.io',
    organization: 'prakash_demo_tfc_business',
    workspaces: {
        name: 'typescript'
    }
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBa0U7QUFDbEUsa0RBQStDO0FBQy9DLHdEQUFxRDtBQUNyRCw4Q0FBa0Q7QUFHbEQsTUFBTSxPQUFRLFNBQVEsc0JBQWM7SUFDbEMsWUFBWSxLQUFnQixFQUFFLElBQVk7UUFDeEMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuQix3QkFBd0I7UUFDeEIsSUFBSSxpQkFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDM0IsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUNsQyxTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDLENBQUM7UUFFSCxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzVCLEtBQUssRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDN0IsU0FBUyxFQUFFLGFBQWE7U0FDekIsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFOUMsSUFBSSxxQkFBYSxDQUFDLEtBQUssRUFBRTtJQUN2QixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFlBQVksRUFBRSwyQkFBMkI7SUFDekMsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFlBQVk7S0FDbkI7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IEFwcCwgVGVycmFmb3JtU3RhY2ssIFJlbW90ZUJhY2tlbmQsIFRva2VuIH0gZnJvbSAnY2RrdGYnO1xuaW1wb3J0IHsgVnBjIH0gZnJvbSAnLi8uZ2VuL3Byb3ZpZGVycy9hd3MvdnBjJztcbmltcG9ydCB7IFN1Ym5ldCB9IGZyb20gJy4vLmdlbi9wcm92aWRlcnMvYXdzL3N1Ym5ldCc7XG5pbXBvcnQgeyBBd3NQcm92aWRlciB9IGZyb20gJy4vLmdlbi9wcm92aWRlcnMvYXdzJ1xuXG5cbmNsYXNzIE15U3RhY2sgZXh0ZW5kcyBUZXJyYWZvcm1TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBuYW1lKTtcblxuICAgIC8vIGRlZmluZSByZXNvdXJjZXMgaGVyZVxuICAgIG5ldyBBd3NQcm92aWRlcih0aGlzLCAnYXdzJywge1xuICAgICAgcmVnaW9uOiAndXMtZWFzdC0xJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgdnBjID0gbmV3IFZwYyh0aGlzLCAnbXktdnBjJywge1xuICAgICAgY2lkckJsb2NrOiAnMTAuMC4wLjAvMTYnXG4gICAgfSk7XG5cbiAgICBuZXcgU3VibmV0KHRoaXMsICdteS1zdWJuZXQnLCB7XG4gICAgICB2cGNJZDogVG9rZW4uYXNTdHJpbmcodnBjLmlkKSxcbiAgICAgIGNpZHJCbG9jazogJzEwLjAuMC4wLzI0J1xuICAgIH0pO1xuXG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgTXlTdGFjayhhcHAsICd2cGMtZXhhbXBsZScpO1xuXG5uZXcgUmVtb3RlQmFja2VuZChzdGFjaywge1xuICBob3N0bmFtZTogJ2FwcC50ZXJyYWZvcm0uaW8nLFxuICBvcmdhbml6YXRpb246ICdwcmFrYXNoX2RlbW9fdGZjX2J1c2luZXNzJyxcbiAgd29ya3NwYWNlczoge1xuICAgIG5hbWU6ICd0eXBlc2NyaXB0J1xuICB9XG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=