module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_S3_BUCKET'),
      },
      logger: console // Only if you want to `stdout` logs
    }
  }
});
