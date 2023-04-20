output "api_endpoint" {
  value = data.aws_apigatewayv2_api.api_gateway_global.api_endpoint
}
output "bucket" {
  value = aws_s3_bucket.epi_frontend_site.bucket
}
