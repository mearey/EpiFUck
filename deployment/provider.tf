terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    null = {
      source = "hashicorp/null"
      version = "3.1.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "2.0.0"
    }
  }
  backend "s3" {
    # Intentially leave empty, will be filled by the pipeline
  }
}

provider "aws" {
  region = "ap-southeast-2"
}
