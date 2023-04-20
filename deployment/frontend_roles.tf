

# Define a new policy allowing your function to access the S3 bucket
# - The name must be prefixed with SENG3011_ otherwise AWS will reject it
# - The more specific, the better. Only ask for permission that your function
#     really need. Be careful with permissions that will result in addition, 
#     modification or deletion of data. This is a way to prevent you from
#     accident or mistakes destroying your work.
resource "aws_iam_policy" "s3_permission" {
  name = "SENG3011_H14B_DELTA_FRONTEND_fe_bucket_permission"

  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : [
            "s3:CreateBucket",
            "s3:GetObject",
            "s3:GetBucketLocation",
            "s3:ListBucket",
            "s3:DeleteObject",
            "s3:PutObject"
          ],
          "Resource" : aws_s3_bucket.epi_frontend_site.arn,
        }
      ]
  })
}
