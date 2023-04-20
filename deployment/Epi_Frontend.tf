module "template_files" {
  source = "hashicorp/dir/template"

  base_dir = "${path.module}/../site"
}

resource "aws_s3_bucket" "epi_frontend_site" {

    bucket = "epi-frontend-site"

    acl = "public-read"   

}

resource "aws_s3_bucket_object" "epi_files" {
    for_each = module.template_files.files

    bucket = "epi_frontend_site"
    key = each.key
    content_type = each.value.content_type

    source = each.value.source_path
    content = each.value.content

    etag = each.value.digests.md5
    acl = "public-read" 
}
