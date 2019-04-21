# aws-serverless-hotelbooking
This is an extension to the Angular web application for a Hotel Booking System. This application is built using Angular 4 and would be using AWS serverless computing - AWS Lambda and Dynamo DB. We will host this application as a static website on Amazon S3. Authentication will be supported using AWS Cognito. This application will help you understand the basics of AWS services and building serverless applications on AWS.


## Prerequisites

**1. Angular CLI:**

Make sure you have Angular CLI installed

**2. Node.js**

Install Node.js version 6.x and above.
To check the version, use the fol. command in your command prompt.
  ```
  node -v
  ```

**3. AWS Account**
Create an AWS account by signing up on aws.amazon.com  

## Running the application locally
Follow the below steps to run the application:
1. Install the dependencies
  ```
  npm install
  ```
2. Transpile the code
  ```
  ng build
  ```
3. Run the application
  ```
  ng serve
  ```
4. Open your browser and hit the URL: http://localhost:4200
You will see the landing page.


# Hosting an Angular Application on AWS S3

1. Create an Angular 5 application using the angular-cli.
2. Once you have the app created, build the app:
```
ng build --prod --aot
```
3. This will generate a **dist** folder with the application bundle. You need to upload the contents of this folder to an s3 bucket.
4. Assuming you already have an AWS Account, login to the console.
5. Go to S3, under services, select a region.
6. Create a new bucket. The name of this bucket must be globally unique.
7. Now install the aws CLI if you not already have it installed.
8. Run aws configure to configure the credentials of the user.
9. Go to the folder of your application, and hit the command:
```
aws s3 cp ./dist s3://<BUCKET_NAME> --recursive --region <YOUR_REGION_FROM_STEP_5>
```
Make sure you put the bucket name you created in step 6.
10. All buckets are private by default. Since this is a web application, you need to make it accessible to the public. In the S3 Console, click on the bucket you created. Go to **"Public Access Settings"**. Uncheck all the settings to enable public access.
11. Now add a bucket policy to make any object added to that bucket public.  Click on the **"Permissions"** tab. Click on **"Bucket Policy"**. Add the following in the editor. Replace the correct bucket name.
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow", 
            "Principal": "*", 
            "Action": "s3:GetObject", 
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*" 
        } 
    ] 
}
```
Click **"Save"**.
12. To serve the content via index.html, you need to enable **"Static Website Hosting"** for your s3 Bucket. Click on the **"Properties"** Tab. Select Static Website Hosting. In the index document field, enter index.html. Note the website URL, leave the other fields blank and click "Save".
13. Paste the URL noted in step 12. in your browser. You should be able to see the landing page of your website. Boom!! You've successfully launched your Angular App on S3. :)

# Configuring Authentication for your Application using AWS Cognito

1. Go to **Cognito** from services in AWS Console.
2. Click "Create User Pool", give a name and hit Create.
3. Now, Create an App Client, Click Add App Client, give a name. Uncheck "generate client secret". Hit Create App Client. Note the App Client ID.
4. You can write code in your application for connecting with AWS Cognito. Use the library  [amazon-cognito-identity-js](https://www.npmjs.com/package/amazon-cognito-identity-js).
5. Enter the Pool ID and App Client ID in the Authorization service (services/authorization.service) of this repository.
6. Build and deploy
6. Users will now be able to login and logout from your App via Cognito. When the users register through your app, a verification code will be sent to the email address provided. When the users enter the correct code, they will be successfully registered via Cognito.
7. Also make sure that the password contains at least one upper-case letter, a number, and a special character. 

Yayy!!

For more details on Cognito, refer: [AWS Cognito Docs](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)

# Creating AWS Lambda and DynamoDB backend for your application
1. For this application we use static data stored in DynamoDB.
2. Go to Dynamo DB from services in the AWS console. Create a table for hotel data.
Name the table **"hotels"** and enter **"id"** as the Partition Key.
Create another table for storing the booking details. Name the table **"bookings"** and enter **"id"** as the Partition Key. Note the ARN of both the tables.
3. For your AWS Lambda to access the DynamoDB tables, you need to grant access using an IAM Role. Let's set that up!
4. Go to IAM from Services. Choose Roles from the Left pane. 
Select Create Role. Select Lambda as the service. Select AWSLambdaBasicExecutionRole as the policy. Hit Review and then Create.
5. Click on the role you just created. Click "Add Inline Policy". Click "Choose a Service" and type DynamoDB. Now, add permissions to be performed on DynamoDB. Add PuItem, BatchGetItem, GetItem and Query permissions. Under Resources, select specific and add the ARNs of the tables you created. We will be adding data to the "hotels" table from the console.
6. Hit Review Policy. Enter a name for the Policy and click "Create Policy".